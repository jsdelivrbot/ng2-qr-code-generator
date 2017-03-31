import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var QRCode: any;

@Component({
    selector: 'app-data-output',
    templateUrl: './data-output.component.html',
    styleUrls: ['./data-output.component.scss']
})
export class DataOutputComponent implements OnInit {

    @Input('jsonOutputData') jsonOutputData: any;
    @Input('color') color: any;

    @ViewChild('qrCode') qrCode: any;
    @ViewChild('downloadLink') downloadLink: any;

    jsonRaw: any;
    jsonResult: string;
    generatedCode = false;
    downloadUrl: string;

    constructor() { }

    ngOnInit() {
    }

    makeQrCode() {
        const self = this;
        this.jsonResult = this.jsonOutputData.replace(/\s/g, '');

        this.qrCode.nativeElement.innerHTML = '';

        new QRCode(this.qrCode.nativeElement, {
            text: self.jsonResult,
            width: 400,
            height: 400,
            colorDark: this.color,
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.L
        });

        this.generatedCode = true;
    }

    downloadImage() {
        this.jsonRaw = JSON.parse(this.jsonOutputData);

        const blob = this.b64toBlob(this.qrCode.nativeElement.lastChild.src, 'image/png', 512);

        this.downloadLink.nativeElement.download = 'qr-code-' + this.jsonRaw.chapterUrl;
        this.downloadUrl = window.URL.createObjectURL(blob);
    }

    b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        const byteCharacters = atob(b64Data.replace(/^data:image\/(png|jpg);base64,/, ''));
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

}
