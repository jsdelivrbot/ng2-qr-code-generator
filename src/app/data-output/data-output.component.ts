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

    jsonResult: string;

    constructor() { }

    ngOnInit() {
    }

    makeQrCode() {
        const self = this;
        this.jsonResult = this.jsonOutputData.replace(/\s/g, '');

        this.qrCode.nativeElement.innerHTML = '';

        new QRCode(this.qrCode.nativeElement , {
            text: self.jsonResult,
            width: 400,
            height: 400,
            colorDark : this.color,
            colorLight : '#ffffff',
            correctLevel : QRCode.CorrectLevel.H
        });
    }

}
