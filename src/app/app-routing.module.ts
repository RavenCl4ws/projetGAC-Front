import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTestComponent } from './page-test/page-test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageArticleJeuComponent } from './page-article-jeu/page-article-jeu.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'test', component: PageTestComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'inscription', component: PageInscriptionComponent},
  {path:'decouvrir', component: PageArticleJeuComponent},
  {path:'profil', component: PageProfilComponent,canActivate : [AuthGuard]},
  {path:'authentification', component: AuthentificationComponent},
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
