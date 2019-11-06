import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bar-icons-idee',
  templateUrl: './bar-icons-idee.component.html',
  styleUrls: ['./bar-icons-idee.component.css']
})
export class BarIconsIdeeComponent implements OnInit {
  social: Social = {
    vote: null,
    collaborateur: null,
    countVote: 0,
  };

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.social.vote ? this.social.vote = null : this.social.vote = true;
  //ajouter +1 au compteur vote quand relié a bdd

  }
  dislike() {
    this.social.vote === false ? this.social.vote = null : this.social.vote = false;
    //ajouter -1 au compteur vote quand relié a bdd
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
  collaborateur: boolean;
  countVote: number;
}
