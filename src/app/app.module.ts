import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {About} from "./about/about.component";
import { ContuctComponent } from './contuct/contuct.component';

@NgModule({
  declarations: [
    AppComponent,
    About,
    ContuctComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
