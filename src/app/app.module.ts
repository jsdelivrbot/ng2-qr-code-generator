import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DataOutputComponent } from './data-output/data-output.component';

import { ColorPickerModule } from 'angular2-color-picker';
import { UrlSanitizerPipe } from './url-sanatizer.pipe';

@NgModule({
    declarations: [
        AppComponent,
        DataInputComponent,
        DataOutputComponent,
        UrlSanitizerPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ColorPickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
