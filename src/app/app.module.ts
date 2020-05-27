import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTestComponent } from './page-test/page-test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageArticleJeuComponent } from './page-article-jeu/page-article-jeu.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { EncartProfilComponent } from './encart-profil/encart-profil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DecouvrirComponent } from './decouvrir/decouvrir.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageTestComponent,
    AccueilComponent,
    PageInscriptionComponent,
    PageArticleJeuComponent,
    CarouselComponent,
    CardGroupComponent,
    SidePanelComponent,
    EncartProfilComponent,
    AuthentificationComponent,
    DecouvrirComponent,
    PageProfilComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
