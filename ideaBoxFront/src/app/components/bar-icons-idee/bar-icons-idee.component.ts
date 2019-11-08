import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/service/VoteService';


@Component({
  selector: 'app-bar-icons-idee',
  templateUrl: './bar-icons-idee.component.html',
  styleUrls: ['./bar-icons-idee.component.css']
})
export class BarIconsIdeeComponent implements OnInit {
  social: Social = {
    vote: null,
    comment: null
  };

  constructor(private voteService: VoteService) { }

  ngOnInit() {
  }
  //TODO : verifier si c'est un commentaire
  like() {
    this.social.vote ? this.social.vote = null : this.social.vote = true;
    this.voteService.ajouter({
      positif: true,
      idMembre: 1
    });
  }
  dislike() {
    this.social.vote === false ? this.social.vote = null : this.social.vote = false;
    let obs = this.voteService.ajouter({
      positif: false,
      idMembre: 1
    });
    obs.subscribe((resultat) => { console.log(resultat); });
  }
  openComment() {
    console.log("ouverture de l'idée, placement dans les commentaires");
  }
}
interface Social {
  vote: boolean;
  comment: boolean;
}
