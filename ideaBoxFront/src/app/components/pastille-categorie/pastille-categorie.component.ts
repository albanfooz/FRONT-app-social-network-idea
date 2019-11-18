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


  constructor() { }



  ngOnInit() {

  }
}

