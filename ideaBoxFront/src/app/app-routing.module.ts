import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PastilleCategorieComponent } from './components/pastille-categorie/pastille-categorie.component';
import {MatChipsModule} from '@angular/material/chips';
import { PageInscriptionComponent } from './template/page-inscription/page-inscription.component';


const routes: Routes = [
  {path: '', component: FrontPageComponent},
  {path: 'pastille-categorie', component : PastilleCategorieComponent},
  {path: 'page-inscription', component : PageInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatChipsModule]

})
export class AppRoutingModule { }
