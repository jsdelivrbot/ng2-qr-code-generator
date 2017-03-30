import { Component, OnInit, Input } from '@angular/core';

declare var PR: any;

@Component({
    selector: 'app-data-input',
    templateUrl: './data-input.component.html',
    styleUrls: ['./data-input.component.scss']
})
export class DataInputComponent implements OnInit {

    @Input('jsonInputData') jsonInputData: any;

    jsonOutputData = '';
    color  = '#000';

    constructor() { }

    ngOnInit() {
        this.updateOutput();
    }

    updateOutput() {
        console.log(this.color);
        this.jsonOutputData = `
            {
                "chapterUrl": "${this.jsonInputData.chapterUrl}",
                "chapterUuid": "${this.jsonInputData.chapterUuid}",
                "isChapter": "${this.jsonInputData.isChapter}",
                "themeCode": "${this.jsonInputData.themeCode}"
            }
        `;
        PR.prettyPrint();
    }
}
