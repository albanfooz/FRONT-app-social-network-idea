import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { PastilleCategorieComponent } from './components/pastille-categorie/pastille-categorie.component';
import { MatChipsModule } from '@angular/material/chips';
import { PageInscriptionComponent } from './template/page-inscription/page-inscription.component';
import { CollaborateurComponent } from './components/collaborateur/collaborateur.component';
import { PopupListCollaborateursComponent } from './components/popup-list-collaborateurs/popup-list-collaborateurs.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { PageIdeaComponent } from './pages/page-idea/page-idea.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'collaborateur', component: CollaborateurComponent },
  { path: 'page-inscription', component: PageInscriptionComponent },
  { path: 'popup-list-collaborateurs', component: PopupListCollaborateursComponent },
  { path: 'pastille-categorie', component: PastilleCategorieComponent },
  { path: 'inscription', component: PageInscriptionComponent }
  { path: 'idea-page', component: PageIdeaComponent },
  { path: 'commentaire', component: CommentaireComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatChipsModule]

})
export class AppRoutingModule { }
