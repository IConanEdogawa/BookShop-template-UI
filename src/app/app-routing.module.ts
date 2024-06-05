import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularPageComponent } from './components/pages/popular-page/popular-page.component';
import { HomeComponent } from './components/home/home.component';
import { CardPageComponent } from './components/pages/card-page/card-page.component';
import { UserProfileComponent } from './components/User/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'most-popular', component: PopularPageComponent },
  { path: 'detailes', component: CardPageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  // { path: 'detailes/:id', component: CardPageComponent },
  { path: 'popular', component: PopularPageComponent },
  {path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
