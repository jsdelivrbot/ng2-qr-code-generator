import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    jsonInputData = {
        chapterUrl: '',
        chapterUuid: '',
        isChapter: true,
        themeCode: ''
    };

    constructor() { }
}
