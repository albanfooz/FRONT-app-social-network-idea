import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { Subscription } from 'rxjs';
import { CategorieService } from 'src/app/services/CategorieService';
import { MembreService } from 'src/app/services/MembreService';
import { IdeeModelFromDB } from 'src/app/models/IdeeModelDTO';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent implements OnInit, OnDestroy {

  searchcontent: string;
  sub: Subscription;
  listeidees = new Array<IdeeModel>();
  resultidees = new Array<IdeeModel>();

  constructor(private route: ActivatedRoute, private ideeService: IdeeService, private categorieService: CategorieService, private membreService: MembreService) { }

  ngOnInit() {

    this.searchcontent = this.route.snapshot.params['searchContent'];

    this.sub = this.ideeService.recupererAllIdees().subscribe((response: Array<IdeeModelFromDB>) => {
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
        this.listeidees.push(ideeMap);
      });

      for (let idee of this.listeidees) {

        if (
          idee.titre.toLowerCase().indexOf(this.searchcontent.toLowerCase()) >= 0 ||
          idee.categorie._categorie.toLowerCase().indexOf(this.searchcontent.toLowerCase()) >= 0 ||
          idee.originalPosteur._pseudo.toLowerCase().indexOf(this.searchcontent.toLowerCase()) >= 0 ||
          idee.description.toLowerCase().indexOf(this.searchcontent.toLowerCase()) >= 0
        ) {
          this.resultidees.push(idee);
        }
      }

    });
  }
  ngOnDestroy() {

    this.sub.unsubscribe();
  }
}
