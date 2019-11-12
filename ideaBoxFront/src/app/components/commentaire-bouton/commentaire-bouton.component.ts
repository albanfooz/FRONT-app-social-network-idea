import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentaire-bouton',
  templateUrl: './commentaire-bouton.component.html',
  styleUrls: ['./commentaire-bouton.component.css']
})
export class CommentaireBoutonComponent implements OnInit {
  social: Social = {
    comment: null
  };

  constructor() { }

  ngOnInit() {
  }

  openComment() {
    console.log("ouverture de l'idée, placement dans les commentaires");
  }
}
interface Social {
  comment: boolean;
}
