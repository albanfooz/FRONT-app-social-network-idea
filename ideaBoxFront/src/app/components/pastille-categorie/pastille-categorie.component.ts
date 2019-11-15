import { Component, OnInit, Input } from '@angular/core';
import { PastilleModel } from 'src/app/models/PastilleModel';
import { Router } from '@angular/router';
import { PastilleService } from 'src/app/services/PastilleService';

@Component({
  selector: 'app-pastille-categorie',
  templateUrl: './pastille-categorie.component.html',
  styleUrls: ['./pastille-categorie.component.css']
})



export class PastilleCategorieComponent implements OnInit {
  @Input() categorie: PastilleModel;
  openComment: Function;
  private _pastille: Array<PastilleModel>;


  constructor(private pastilleService: PastilleService) {
    this._pastille = pastilleService.pastille; // appelle le service PastilleService.ts avec la variable this._pastille

  }

  ngOnInit() {

  }
}

