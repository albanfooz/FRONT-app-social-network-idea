import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton-collaborateur',
  templateUrl: './bouton-collaborateur.component.html',
  styleUrls: ['./bouton-collaborateur.component.css']
})
export class BoutonCollaborateurComponent implements OnInit {

  collaborateur: boolean = null;

  constructor() { }
  ngOnInit() {
  }

  demandeCollaborateur() {
    this.collaborateur ? this.collaborateur = null : this.collaborateur = true;
  }
}
