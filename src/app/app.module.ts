import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { CoruselComponent } from './components/pages/corusel/corusel.component';
import { CardComponent } from './components/pages/card/card.component';
import { PopularComponent } from './components/pages/popular/popular.component';
import { PopularPageComponent } from './components/pages/popular-page/popular-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CoruselComponent,
    CardComponent,
    PopularComponent,
    PopularPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
