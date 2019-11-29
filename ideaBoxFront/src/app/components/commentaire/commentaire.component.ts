import { Component, OnInit, Input } from '@angular/core';
import { CommentaireModel } from 'src/app/models/CommentaireModel';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  isCommentable: boolean = false;

  openComment: Function;
  @Input() comment: CommentaireModel;
  constructor() { }

  ngOnInit() {
    this.openComment = this.open.bind(this);
  }

  open() {
    this.isCommentable = !this.isCommentable;
  }
}
