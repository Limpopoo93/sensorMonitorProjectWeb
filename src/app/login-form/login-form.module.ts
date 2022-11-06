import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginFormComponent} from "./login-form.component";

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    LoginFormComponent
  ],
  bootstrap: [LoginFormComponent]
})
export class LoginFormModule {
}
