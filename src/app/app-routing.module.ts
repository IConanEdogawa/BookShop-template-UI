import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularPageComponent } from './components/pages/popular-page/popular-page.component';
import { HomeComponent } from './components/home/home.component';
import { CardPageComponent } from './components/pages/card-page/card-page.component';
import { UserProfileComponent } from './components/User/user-profile/user-profile.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'most-popular', component: PopularPageComponent },
  { path: 'detailes', component: CardPageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'popular', component: PopularPageComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
