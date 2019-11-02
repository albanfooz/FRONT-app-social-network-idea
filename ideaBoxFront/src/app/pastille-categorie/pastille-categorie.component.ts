import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pastille-categorie',
  templateUrl: './pastille-categorie.component.html',
  styleUrls: ['./pastille-categorie.component.css']
})
export class PastilleCategorieComponent implements OnInit {
  nomPastilleCategorieTechnologie : String;
  nomPastilleCategorieEntreprenariat : String;
  nomPastilleCategorieEtudeFormation : String;
  nomPastilleCategorieJeux : String;
  nomPastilleCategorieEntreAide: String;
  nomPastilleCategorieNature : String;
  nomPastilleCategorieEcologie : String;
  nomPastilleCategorie : String;
  imgPastilleCategorie : ImageData;

  constructor() { 
    this.nomPastilleCategorieTechnologie = '  Technologie';
    this.nomPastilleCategorieEntreprenariat = '  Entreprenariat';
    this.nomPastilleCategorieEtudeFormation = '  Etude/Formation';
    this.nomPastilleCategorieJeux = '  Jeux';
    this.nomPastilleCategorieEntreAide = '  Entre-Aide';
    this.nomPastilleCategorieNature = '  Nature';
    this.nomPastilleCategorieEcologie = '  Ecologie'; 


  }

  ngOnInit() {}

  }

