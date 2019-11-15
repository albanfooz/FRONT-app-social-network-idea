import { Component, OnInit, Input } from '@angular/core';
import { CategorieModel } from 'src/app/models/CategorieModel';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/CategorieService';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-pastille-categorie',
  templateUrl: './pastille-categorie.component.html',
  styleUrls: ['./pastille-categorie.component.css']
})



export class PastilleCategorieComponent implements OnInit {
  @Input() categorie: CategorieModel;
  openComment: Function;
  private _pastille: Array<CategorieModel>;


  constructor(private pastilleService: CategorieService) {
    this._pastille = pastilleService.pastille; // appelle le service PastilleService.ts avec la variable this._pastille

  }



  ngOnInit() {

  }
}

