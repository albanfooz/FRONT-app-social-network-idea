import { Component, OnInit } from '@angular/core';
import { CommentaireModel } from 'src/app/models/CommentaireModel';
import { CommentaireService } from 'src/app/services/CommentaireService';
import { MembreModel } from 'src/app/models/MembreModel';
import { MembreService } from 'src/app/services/MembreService';

@Component({
  selector: 'app-input-commentaire',
  templateUrl: './input-commentaire.component.html',
  styleUrls: ['./input-commentaire.component.css']
})
export class InputCommentaireComponent implements OnInit {
  private commentaire: CommentaireModel = {
    _createdAt: new Date(),
    _texteCommentaire: '',
    _membre: this.membreService.recupererMembreByIdBouchon(3),
    _score: 100
  };

  constructor(private commentaireService: CommentaireService, private membreService: MembreService) {
  }

  ngOnInit() {
  }

  creation() {
    this.commentaireService.creation(this.commentaire);
  }
}
