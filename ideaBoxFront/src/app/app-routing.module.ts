import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { PastilleCategorieComponent } from './components/pastille-categorie/pastille-categorie.component';
import { MatChipsModule } from '@angular/material/chips';
import { ListeCommentairesComponent } from './components/liste-commentaires/liste-commentaires.component';
import { CollaborateurComponent } from './components/collaborateur/collaborateur.component';
import { PopupListCollaborateursComponent } from './components/popup-list-collaborateurs/popup-list-collaborateurs.component';
import { PageIdeaComponent } from './pages/page-idea/page-idea.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageAjoutIdeeComponent } from './pages/page-ajout-idee/page-ajout-idee.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { PopupInscription } from './components/pop-up-inscription/commentaire.component';
import { PageCategorieComponent } from './pages/page-categorie/page-categorie.component';
import { PageMembreComponent } from './pages/page-membre/page-membre.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'collaborateur', component: CollaborateurComponent },
  { path: 'popup-list-collaborateurs', component: PopupListCollaborateursComponent },
  { path: 'pastille-categorie', component: PastilleCategorieComponent },
  { path: 'inscription', component: popup-inscriptionComponent },
  { path: 'idea/:ideaId', component: PageIdeaComponent },
  { path: 'categorie/:categorieId', component: PageCategorieComponent },
  { path: 'profil/:membreId', component: PageMembreComponent },
  { path: 'ajout-idee', component: PageAjoutIdeeComponent },
  { path: 'commentaire', component: CommentaireComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule,
    MatChipsModule]

})
export class AppRoutingModule { }
