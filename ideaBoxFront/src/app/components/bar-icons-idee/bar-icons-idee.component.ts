import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bar-icons-idee',
  templateUrl: './bar-icons-idee.component.html',
  styleUrls: ['./bar-icons-idee.component.css']
})
export class BarIconsIdeeComponent implements OnInit {
  social: Social = {
    vote: null,
    comment: null,
    collaborateur: null,
    iconCommentaire: 'chat_bubble_outline',
  };

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.social.vote ? this.social.vote = null : this.social.vote = true;
  }
  dislike() {
    this.social.vote === false ? this.social.vote = null : this.social.vote = false;
  }
  openComment() {
    console.log("ouverture de l'idée, placement dans les commentaires");
  }
  demandeCollaborateur() {
    this.social.collaborateur ? this.social.collaborateur = null : this.social.collaborateur = true;
  }
}
interface Social {
  vote: boolean;
  comment: boolean;
  collaborateur: boolean;
  iconCommentaire: string;
}
