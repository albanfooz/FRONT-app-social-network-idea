import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarIconsIdeeComponent } from './components/bar-icons-idee/bar-icons-idee.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { IdeaPostComponent } from './components/idea-post/idea-post.component';
import { PastilleCategorieComponent } from './components/pastille-categorie/pastille-categorie.component';
import { PageInscriptionComponent } from './template/page-inscription/page-inscription.component';
import { ListeCollaborateursProjetComponent } from './components/liste-collaborateurs-projet/liste-collaborateurs-projet.component';
import { CollaborateurComponent } from './components/collaborateur/collaborateur.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { PopupListCollaborateursComponent } from './components/popup-list-collaborateurs/popup-list-collaborateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageInscriptionComponent,
    PastilleCategorieComponent,
    FrontPageComponent,
    BarIconsIdeeComponent,
    IdeaPostComponent,
    FrontPageComponent,
    BarIconsIdeeComponent,
    ListeCollaborateursProjetComponent,
    CollaborateurComponent,
    PopupListCollaborateursComponent,

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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
