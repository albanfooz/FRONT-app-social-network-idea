import { Component, OnInit, OnDestroy } from '@angular/core';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { MembreModelDTO } from 'src/app/models/MembreModelDTO';
import { MembreService } from 'src/app/services/MembreService';
import { IdeeModelFromDB } from 'src/app/models/IdeeModelDTO';
import { Observable, Subscription } from 'rxjs';
import { MembreModel } from 'src/app/models/MembreModel';
import { CategorieService } from 'src/app/services/CategorieService';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit, OnDestroy {

  idees: Array<IdeeModel> = [];
  sub: Subscription;
  membreSubs: Array<Subscription>;
  constructor(private ideeService: IdeeService, private membreService: MembreService, private categorieService: CategorieService) { }
  ngOnInit() {
    let tempIdees: Array<IdeeModelFromDB>;


    this.sub = this.ideeService.recupererAllIdees().subscribe((response: Array<IdeeModelFromDB>) => {
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
    /*
     let obsMembre = this.membreService.recupererMembrebyMembreId(idee.membreId);
        obsMembre.subscribe((response2: MembreModelDTO) => {
          console.log('membreId ' + idee.membreId + ' ');
          console.log(response2);
        });
        */

  }

  ngOnDestroy() {

    this.sub.unsubscribe;

  }

}
