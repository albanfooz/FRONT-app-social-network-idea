import { Component, OnInit } from '@angular/core';
import { MembreService } from 'src/app/services/MembreService';
import { ActivatedRoute } from '@angular/router';
import { MembreModel } from 'src/app/models/MembreModel';

@Component({
  selector: 'app-page-membre',
  templateUrl: './page-membre.component.html',
  styleUrls: ['./page-membre.component.css']
})
export class PageMembreComponent implements OnInit {
  id: number;
  membre:MembreModel;

  constructor(private route: ActivatedRoute,private membreService:MembreService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["membreId"];
    this.membre = this.membreService.recupererMembreById(this.id);
  }

}
