import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTestComponent } from './page-test/page-test.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';


const routes: Routes = [
  {path:'test', component: PageTestComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'inscription', component: PageInscriptionComponent},
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
