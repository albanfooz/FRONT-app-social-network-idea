import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  coments = [
    { photoMembre: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", membre: "nom membre", contenu: "commentaire du membre" },
    { photoMembre: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", membre: "nom membre", contenu: "commentaire du membre" },
    { photoMembre: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", membre: "nom membre", contenu: "commentaire du membre" },
    { photoMembre: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", membre: "nom membre", contenu: "commentaire du membre" }
  ];

}
