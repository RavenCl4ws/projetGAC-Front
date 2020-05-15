import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTestComponent } from './page-test/page-test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageArticleJeuComponent } from './page-article-jeu/page-article-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTestComponent,
    AccueilComponent,
    PageInscriptionComponent,
    PageArticleJeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
