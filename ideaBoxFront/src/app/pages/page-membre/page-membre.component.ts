import { Component, OnInit, Input } from '@angular/core';
import { MembreService } from 'src/app/services/MembreService';
import { ActivatedRoute } from '@angular/router';
import { MembreModel } from 'src/app/models/MembreModel';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';
import { MembreModelDTO } from 'src/app/models/MembreModelDTO';

@Component({
  selector: 'app-page-membre',
  templateUrl: './page-membre.component.html',
  styleUrls: ['./page-membre.component.css']
})
export class PageMembreComponent implements OnInit {
  id: number;
  membre: MembreModel = null;
  idees: Array<IdeeModel> = [];

  constructor(private route: ActivatedRoute, private membreService: MembreService, private ideeService: IdeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['membreId'];
    //this.membre = this.membreService.recupererMembreByIdBouchon(this.id);
    const obs = this.membreService.recupererMembreById(this.id);
    obs.subscribe(response => {
      const membreFromDb = response as MembreModelDTO;
      this.membre = {
        _id: membreFromDb.id,
        _pseudo: membreFromDb.login
      };
      console.log(this.membre);
    });

    //   this.idees = this.ideeService.recupererIdeesByPosteur(this.id);
  }

}
