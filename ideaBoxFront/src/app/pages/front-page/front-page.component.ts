import { Component, OnInit } from '@angular/core';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { MembreModelDTO } from 'src/app/models/MembreModelDTO';
import { MembreService } from 'src/app/services/MembreService';
import { IdeeModelFromDB } from 'src/app/models/IdeeModelDTO';
import { Observable } from 'rxjs';
import { MembreModel } from 'src/app/models/MembreModel';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  idees: Array<IdeeModel> = [];
  observables: Array<Observable<Object>>;
  constructor(private ideeService: IdeeService, private membreService: MembreService) { }

  ngOnInit() {
    let tempIdees: Array<IdeeModelFromDB>;
    // this.observables.push(this.ideeService.recupererAllIdees());
    let obs = this.ideeService.recupererAllIdees();

    //this.observables[0].subscribe(response => {
    obs.subscribe(response => {
      tempIdees = response as Array<IdeeModelFromDB>;
      tempIdees.forEach(idee => {
        /*this.observables.push(this.membreService.recupererMembreById(idee.id));
        let membreTemp: MembreModel;
        this.observables[this.observables.length - 1].subscribe(response2 =>{

        }
        )*/
        let t = {
          id: idee.id,
          titre: idee.titre,
          categorie: { _id: idee.categorieId, _categorie: 'TODO', _icone: 'computer' },
          originalPosteur: { _id: idee.id, _pseudo: 'hmmm' },
          description: idee.description + ' ',
          score: idee.score,
          _image: 'https://picsum.photos/800/400?random=' + idee.id,
          createdAt: new Date(idee.createdAt)
        };


        console.log(t);

        this.idees.push(t);
      });
      // i = this.membreService.recupererMembreById(tempIdees.membreId })

    });
  }

}
