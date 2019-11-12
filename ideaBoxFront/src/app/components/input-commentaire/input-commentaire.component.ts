import { Component, OnInit } from '@angular/core';
import { CommentaireModel } from 'src/app/models/CommentaireModel';
import { CommentaireService } from 'src/app/services/CommentaireService';

@Component({
  selector: 'app-input-commentaire',
  templateUrl: './input-commentaire.component.html',
  styleUrls: ['./input-commentaire.component.css']
})
export class InputCommentaireComponent implements OnInit {
  private commentaire: CommentaireModel = { _createdAt: new Date(), _contenu: '', _idMembre: 0 };

  constructor(private commentaireService: CommentaireService) {
  }

  ngOnInit() {
  }

  creation() {
    this.commentaireService.creation(this.commentaire);
  }
}
