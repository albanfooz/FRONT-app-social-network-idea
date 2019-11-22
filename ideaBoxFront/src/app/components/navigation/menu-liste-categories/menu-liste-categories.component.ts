import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/CategorieService';

@Component({
  selector: 'app-menu-liste-categories',
  templateUrl: './menu-liste-categories.component.html',
  styleUrls: ['./menu-liste-categories.component.css']
})
export class MenuListeCategoriesComponent implements OnInit {

  listeCategories = this.categorieService.pastille;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
  }

}
