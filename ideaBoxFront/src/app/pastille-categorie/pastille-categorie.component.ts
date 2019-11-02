import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastille-categorie',
  templateUrl: './pastille-categorie.component.html',
  styleUrls: ['./pastille-categorie.component.css']
})
export class PastilleCategorieComponent implements OnInit {
  nomPastilleCategorieTechnologie : String;
  nomPastilleCategorieSocial : String;
  nomPastilleCategorieAnimaux : String;
  nomPastilleCategorieEntreAide: String;
  nomPastilleCategorieNature : String;
  nomPastilleCategorieEcologie : String;
  nomPastilleCategorie : String;
  imgPastilleCategorie : ImageData;

  constructor(String = "", ImageDat = "") { 
    this.nomPastilleCategorieTechnologie = 'Technologie';
    this.nomPastilleCategorieSocial = 'Social';
    this.nomPastilleCategorieAnimaux = 'Animaux';
    this.nomPastilleCategorieEntreAide = 'EntreAide';
    this.nomPastilleCategorieNature = 'Nature';
    this.nomPastilleCategorieEcologie = 'Ecologie'; 


  }

  ngOnInit() {}

  }

