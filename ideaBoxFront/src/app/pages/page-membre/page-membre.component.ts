import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MembreService } from 'src/app/services/MembreService';
import { ActivatedRoute } from '@angular/router';
import { MembreModel } from 'src/app/models/MembreModel';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';
import { MembreModelDTO } from 'src/app/models/MembreModelDTO';
import { Subscription } from 'rxjs';
import { CategorieService } from 'src/app/services/CategorieService';
import { IdeeModelFromDB } from 'src/app/models/IdeeModelDTO';

@Component({
  selector: 'app-page-membre',
  templateUrl: './page-membre.component.html',
  styleUrls: ['./page-membre.component.css']
})
export class PageMembreComponent implements OnInit, OnDestroy {
  id: number;
  membre: MembreModel = null;
  idees: Array<IdeeModel> = [];
  sub: Subscription;

  constructor(private route: ActivatedRoute, private membreService: MembreService, private ideeService: IdeeService, private categorieService: CategorieService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['membreId'];
    //this.membre = this.membreService.recupererMembreByIdBouchon(this.id);
    this.membre = this.membreService.recupererMembreByIdBouchon(this.id);




    this.sub = this.ideeService.recupererIdeesByPosteur(this.id).subscribe((response: Array<IdeeModelFromDB>) => {
      response.forEach(idee => {
        let ideeMap: IdeeModel;
        ideeMap = {
          id: idee.id,
          titre: idee.titre,
          categorie: this.categorieService.recupererById(idee.id),
          originalPosteur: this.membreService.recupererMembreByIdBouchon(idee.id),
          description: idee.description + ' ',
          score: idee.score,
          _image: 'https://picsum.photos/800/400?random=' + idee.id,
          createdAt: new Date(idee.createdAt)
        };
        this.idees.push(ideeMap);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
