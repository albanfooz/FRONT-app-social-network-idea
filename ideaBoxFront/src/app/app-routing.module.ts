import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PastilleCategorieComponent } from './components/pastille-categorie/pastille-categorie.component';
import {MatChipsModule} from '@angular/material/chips';
import { PageInscriptionComponent } from './template/page-inscription/page-inscription.component';
import { CollaborateurComponent } from './components/collaborateur/collaborateur.component';
import { PopUpDetailsComponent } from './components/popup-collaborateurs/pop-up-details.component';


const routes: Routes = [
  {path: '', component: FrontPageComponent},
  {path: 'collaborateur', component : CollaborateurComponent},
  {path: 'pop-up-details', component : PopUpDetailsComponent},
  {path: 'page-inscription', component : PageInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatChipsModule]

})
export class AppRoutingModule { }
