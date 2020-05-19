import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTestComponent } from './page-test/page-test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageArticleJeuComponent } from './page-article-jeu/page-article-jeu.component';


const routes: Routes = [
  {path:'test', component: PageTestComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'inscription', component: PageInscriptionComponent},
  {path:'decouvrir', component: PageArticleJeuComponent},
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
