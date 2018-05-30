import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CoreComponent} from './core/core.component';
import {LoginComponent} from './core/login/login.component';
import {SignupComponent} from './core/signup/signup.component';
import {AboutComponent} from './core/about/about.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/core', pathMatch: 'full'},
  {path: 'core', component: CoreComponent, children: [
      // {path: '', component: CoreComponent},
      {path: '', component: LoginComponent},
      {path: 'login' , component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'about', component: AboutComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
