import { Component, OnInit } from '@angular/core';
import { CommentaireModel } from 'src/app/models/CommentaireModel';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  comment: boolean = false;
  coments = [
    { photoMembre: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", membre: "nom membre", contenu: "commentaire du membre" },
    { photoMembre: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", membre: "nom membre", contenu: "commentaire du membre" },
    { photoMembre: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", membre: "nom membre", contenu: "commentaire du membre" },
    { photoMembre: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", membre: "nom membre", contenu: "commentaire du membre" }
  ];
  openComment: Function;
  commentaire: CommentaireModel;
  commentaires: Array<CommentaireModel>;
  constructor() { }

  ngOnInit() {
    this.openComment = this.open.bind(this);
  }

  open() {
    this.comment = !this.comment;
  }



}
