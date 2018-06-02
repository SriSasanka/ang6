import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { CoreComponent } from './core/core.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './core/login/login.component';
import { AboutComponent } from './core/about/about.component';
import { SignupComponent } from './core/signup/signup.component';
import { AnimeAppComponent } from './anime-app/anime-app.component';
import { HomeComponent } from './anime-app/home/home.component';
import { AnimeListComponent } from './anime-app/anime-list/anime-list.component';
import { AnimeGenresComponent } from './anime-app/anime-genres/anime-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    LoginComponent,
    AboutComponent,
    SignupComponent,
    AnimeAppComponent,
    HomeComponent,
    AnimeListComponent,
    AnimeGenresComponent
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
