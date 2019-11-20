import { Component, OnInit } from '@angular/core';
import { CommentaireModel } from 'src/app/models/CommentaireModel';
import { CommentaireService } from 'src/app/services/CommentaireService';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  isCommentable: boolean = false;

  openComment: Function;
  commentaire: CommentaireModel;
  commentaires: Array<CommentaireModel>;
  constructor(private commentService: CommentaireService) { }

  ngOnInit() {
    this.openComment = this.open.bind(this);
  }

  open() {
    this.isCommentable = !this.isCommentable;
  }
}
