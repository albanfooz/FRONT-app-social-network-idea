import { Component, OnInit } from '@angular/core';
import { CommentaireService } from 'src/app/services/CommentaireService';

@Component({
  selector: 'app-liste-commentaires',
  templateUrl: './liste-commentaires.component.html',
  styleUrls: ['./liste-commentaires.component.css']
})
export class ListeCommentairesComponent implements OnInit {



  constructor(private commentService: CommentaireService) { }

  ngOnInit() {

  }

}
