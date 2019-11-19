import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/navigation/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarIconsIdeeComponent } from './components/bar-icons-idee/bar-icons-idee.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { IdeaPostComponent } from './components/idee/idea-post/idea-post.component';
import { PastilleCategorieComponent } from './components/pastille-categorie/pastille-categorie.component';
import { MatInputModule } from '@angular/material/input';
import { SearchbarComponent, SearchbarPopupComponent } from './components/navigation/searchbar/searchbar.component';
import { CollaborateurComponent } from './components/collaborateur/collaborateur.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupListCollaborateursComponent } from './components/popup-list-collaborateurs/popup-list-collaborateurs.component';
import { PageIdeaComponent } from './pages/page-idea/page-idea.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { IdeaFullComponent } from './components/idee/idea-full/idea-full.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { InputCommentaireComponent } from './components/input-commentaire/input-commentaire.component';
import { BoutonCollaborateurComponent } from './components/bouton-collaborateur/bouton-collaborateur.component';
import { MatRippleModule } from '@angular/material/core';
import { ListeCommentairesComponent } from './components/liste-commentaires/liste-commentaires.component';
import { MatFormFieldModule, MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { VoteComponent } from './components/vote/vote.component';
import { CommentaireBoutonComponent } from './components/commentaire-bouton/commentaire-bouton.component';
import { CookieService } from 'ngx-cookie-service';
import { MenuConnexionComponent, ConnexionPopupComponent } from './components/navigation/menu-connexion/menu-connexion.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PageAjoutIdeeComponent } from './pages/page-ajout-idee/page-ajout-idee.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { PageCategorieComponent } from './pages/page-categorie/page-categorie.component';
import { PageMembreComponent } from './pages/page-membre/page-membre.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IdeeListComponent } from './components/idee/idee-list/idee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PastilleCategorieComponent,
    FrontPageComponent,
    BarIconsIdeeComponent,
    IdeaPostComponent,
    PageIdeaComponent,
    PageNotFoundComponent,
    FrontPageComponent,
    BarIconsIdeeComponent,
    SearchbarComponent,
    BarIconsIdeeComponent,
    CollaborateurComponent,
    PopupListCollaborateursComponent,
    IdeaFullComponent,
    CommentaireComponent,
    InputCommentaireComponent,
    BoutonCollaborateurComponent,
    ListeCommentairesComponent,
    VoteComponent,
    SearchbarPopupComponent,
    CommentaireBoutonComponent,
    PageAjoutIdeeComponent,
    MenuConnexionComponent,
    MenuConnexionComponent,
    PageCategorieComponent,
    PageMembreComponent,
    ConnexionPopupComponent,
    PageInscriptionComponent
    IdeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatRippleModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [SearchbarPopupComponent, ConnexionPopupComponent]
})
export class AppModule { }
