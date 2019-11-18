import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/CategorieService';
import { ActivatedRoute } from '@angular/router';
import { CategorieModel } from 'src/app/models/CategorieModel';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';
import { element } from 'protractor';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.css']
})
export class PageCategorieComponent implements OnInit {
  id: number;
  categorie: CategorieModel;
  idees: Array<IdeeModel> = [];
  constructor(private route: ActivatedRoute, private categorieService: CategorieService, private ideeService: IdeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["categorieId"];
    this.categorie = this.categorieService.pastille.find(({ _id }) => _id == this.id);
    this.idees = this.ideeService.recupererIdeesByCategorie(this.id);
  }

}
