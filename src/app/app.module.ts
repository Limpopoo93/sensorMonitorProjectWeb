import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginFormModule} from "./login-form/login-form.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
