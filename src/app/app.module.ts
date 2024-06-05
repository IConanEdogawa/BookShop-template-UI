import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { CoruselComponent } from './components/pages/corusel/corusel.component';
import { CardComponent } from './components/pages/card/card.component';
import { PopularComponent } from './components/pages/popular/popular.component';
import { PopularPageComponent } from './components/pages/popular-page/popular-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardPageComponent } from './components/pages/card-page/card-page.component';
import { CardPageFooterComponent } from './components/pages/card-page-footer/card-page-footer.component';
import { UserProfileComponent } from './components/User/user-profile/user-profile.component';
import { InfoComponent } from './components/User/info/info.component';
import { MarkbookComponent } from './components/User/markbook/markbook.component';
import { CommentsComponent } from './components/User/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CoruselComponent,
    CardComponent,
    PopularComponent,
    PopularPageComponent,
    CardPageComponent,
    CardPageFooterComponent,
    UserProfileComponent,
    InfoComponent,
    MarkbookComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
