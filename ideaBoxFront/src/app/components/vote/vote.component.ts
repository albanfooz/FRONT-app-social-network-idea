import { Component, OnInit, Input } from '@angular/core';
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

  @Input() score: number;

  constructor(private voteService: VoteService) { }

  ngOnInit() {
  }

  like() {
    this.social.vote ? this.social.vote = null : this.social.vote = true;
    this.voteService.ajouter({
      positif: this.social.vote,
      idMembre: 1
    });
    this.social.vote ? this.score++ : this.score--;
  }
  dislike() {
    this.social.vote === false ? this.social.vote = null : this.social.vote = false;
    this.voteService.ajouter({
      positif: this.social.vote,
      idMembre: 1
    });
    this.social.vote === false ? this.score-- : this.score++;
    //FIXME : réparer l'url
    //obs.subscribe((resultat) => { console.log(resultat); });
  }
}
interface Social {
  vote: boolean;
}

