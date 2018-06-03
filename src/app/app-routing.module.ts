import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CoreComponent} from './core/core.component';
import {LoginComponent} from './core/login/login.component';
import {SignupComponent} from './core/signup/signup.component';
import {AboutComponent} from './core/about/about.component';
import {AnimeAppComponent} from './anime-app/anime-app.component';
import {HomeComponent} from './anime-app/home/home.component';
import {AnimeListComponent} from './anime-app/anime-list/anime-list.component';
import {AnimeGenresComponent} from './anime-app/anime-genres/anime-genres.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/core', pathMatch: 'full'},
  {path: 'core', component: CoreComponent, children: [
      // {path: '', component: CoreComponent},
      {path: '', component: LoginComponent},
      {path: 'login' , component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'about', component: AboutComponent}
    ]},
  {path: 'anime', component: AnimeAppComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'animelist', component: AnimeListComponent},
      {path: 'genres', component: AnimeGenresComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
