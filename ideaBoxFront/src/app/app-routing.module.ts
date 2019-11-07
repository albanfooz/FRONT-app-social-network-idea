import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PastilleCategorieComponent } from './components/pastille-categorie/pastille-categorie.component';
import { MatChipsModule } from '@angular/material/chips';
import { PageInscriptionComponent } from './template/page-inscription/page-inscription.component';
import { CollaborateurComponent } from './components/collaborateur/collaborateur.component';
import { PopupListCollaborateursComponent } from './components/popup-list-collaborateurs/popup-list-collaborateurs.component';



const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'collaborateur', component: CollaborateurComponent },
  { path: 'page-inscription', component: PageInscriptionComponent },
  { path: 'popup-list-collaborateurs', component: PopupListCollaborateursComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatChipsModule]

})
export class AppRoutingModule { }
