import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pastille-categorie',
  templateUrl: './pastille-categorie.component.html',
  styleUrls: ['./pastille-categorie.component.css']
})
export class PastilleCategorieComponent implements OnInit {
  nomPastilleCategorieEntreprenariat:String;

  /*
  nomPastilleCategorieTechnologie:String;
  nomPastilleCategorieEtudeFormation : String;
  nomPastilleCategorieJeux : String;
  nomPastilleCategorieEntreAide: String;
  nomPastilleCategorieNature : String;
  nomPastilleCategorieEcologie : String;
  nomPastilleCategorie : String;
  */

  constructor() {
    this.nomPastilleCategorieEntreprenariat = 'Entreprenariat';

    /*
    this.nomPastilleCategorieTechnologie = '  Technologie';
    this.nomPastilleCategorieEtudeFormation = '  Etude/Formation';
    this.nomPastilleCategorieJeux = '  Jeux';
    this.nomPastilleCategorieEntreAide = '  Entre-Aide';
    this.nomPastilleCategorieNature = '  Nature';
    this.nomPastilleCategorieEcologie = '  Ecologie'; */
  }

  ngOnInit() {}

  }

