import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { PastilleCategorieComponent } from './pastille-categorie/pastille-categorie.component';


const routes: Routes = [
  {path:'', component:FrontPageComponent},
  {path: 'pastille-categorie', component : PastilleCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
