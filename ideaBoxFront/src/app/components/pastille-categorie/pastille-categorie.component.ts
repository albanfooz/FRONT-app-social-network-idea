import { Component, OnInit, Input } from '@angular/core';
import { CategorieModel } from 'src/app/models/CategorieModel';



@Component({
  selector: 'app-pastille-categorie',
  templateUrl: './pastille-categorie.component.html',
  styleUrls: ['./pastille-categorie.component.css']
})



export class PastilleCategorieComponent implements OnInit {
  @Input() categorie: CategorieModel;


  constructor() { }



  ngOnInit() {

  }
}

