import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/CategorieService';
import { ActivatedRoute } from '@angular/router';
import { CategorieModel } from 'src/app/models/CategorieModel';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { IdeeModelFromDB } from 'src/app/models/IdeeModelDTO';
import { MembreService } from 'src/app/services/MembreService';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.css']
})
export class PageCategorieComponent implements OnInit {
  id: number;
  categorie: CategorieModel;
  idees: Array<IdeeModel> = [];
  sub: Subscription;
  constructor(private route: ActivatedRoute, private categorieService: CategorieService, private ideeService: IdeeService, private membreService: MembreService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['categorieId'];
    this.categorie = this.categorieService.recupererById(this.id);

    this.sub = this.ideeService.recupererIdeesByCategorie(this.id).subscribe((response: Array<IdeeModelFromDB>) => {
      response.forEach(idee => {
        let ideeMap: IdeeModel;
        ideeMap = {
          id: idee.id,
          titre: idee.titre,
          categorie: this.categorieService.recupererById(idee.categorieId),
          originalPosteur: this.membreService.recupererMembreByIdBouchon(idee.membreId),
          description: idee.description + ' ',
          score: idee.score,
          _image: 'https://picsum.photos/800/400?random=' + idee.id,
          createdAt: new Date(idee.createdAt)
        };
        this.idees.push(ideeMap);
      });
    });
  }

}
