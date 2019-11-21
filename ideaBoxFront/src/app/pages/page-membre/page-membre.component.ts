import { Component, OnInit } from '@angular/core';
import { MembreService } from 'src/app/services/MembreService';
import { ActivatedRoute } from '@angular/router';
import { MembreModel } from 'src/app/models/MembreModel';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';

@Component({
  selector: 'app-page-membre',
  templateUrl: './page-membre.component.html',
  styleUrls: ['./page-membre.component.css']
})
export class PageMembreComponent implements OnInit {
  id: number;
  membre: MembreModel;
  idees: Array<IdeeModel>;

  constructor(private route: ActivatedRoute, private membreService: MembreService, private ideeService: IdeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['membreId'];
    this.membre = this.membreService.recupererMembreById(this.id);
    this.idees = this.ideeService.recupererIdeesByPosteur(this.id);
  }

}
