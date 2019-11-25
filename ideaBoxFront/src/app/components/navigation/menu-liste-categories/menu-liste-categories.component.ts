import { Component, OnInit, Input } from '@angular/core';
import { CategorieService } from 'src/app/services/CategorieService';

@Component({
  selector: 'app-menu-liste-categories',
  templateUrl: './menu-liste-categories.component.html',
  styleUrls: ['./menu-liste-categories.component.css']
})
export class MenuListeCategoriesComponent implements OnInit {

  @Input() position: string;

  listeCategories = this.categorieService.pastille;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
  }

}
