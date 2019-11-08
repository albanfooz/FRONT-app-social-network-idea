import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/services/VoteService';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  social: Social = {
    vote: null,
  };

  constructor(private voteService: VoteService) { }

  ngOnInit() {
  }
  //TODO : verifier si c'est un commentaire
  like() {
    this.social.vote ? this.social.vote = null : this.social.vote = true;
    this.voteService.ajouter({
      positif: this.social.vote,
      idMembre: 1
    });
  }
  dislike() {
    this.social.vote === false ? this.social.vote = null : this.social.vote = false;
    const obs = this.voteService.ajouter({
      positif: this.social.vote,
      idMembre: 1
    });
    //FIXME : réparer l'url
    //obs.subscribe((resultat) => { console.log(resultat); });
  }
}
interface Social {
  vote: boolean;
}

