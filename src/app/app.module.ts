import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { CoreComponent } from './core/core.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './core/login/login.component';
import { AboutComponent } from './core/about/about.component';
import { SignupComponent } from './core/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    LoginComponent,
    AboutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
