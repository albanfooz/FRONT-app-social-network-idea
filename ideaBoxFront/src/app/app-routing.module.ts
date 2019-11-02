import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PastilleCategorieComponent } from './pastille-categorie/pastille-categorie.component';
import {MatChipsModule} from '@angular/material/chips';


const routes: Routes = [
  {path:'', component:FrontPageComponent},
  {path: 'pastille-categorie', component : PastilleCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatChipsModule]

})
export class AppRoutingModule { }
