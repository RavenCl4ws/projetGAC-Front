import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTestComponent } from './page-test/page-test.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  {path:'test', component: PageTestComponent},
  {path:'accueil', component: AccueilComponent},
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
