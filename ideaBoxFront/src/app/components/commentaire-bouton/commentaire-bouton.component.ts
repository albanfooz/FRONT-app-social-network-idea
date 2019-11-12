import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { __importDefault } from 'tslib';
import { CommentaireModel } from 'src/app/models/CommentaireModel';

@Component({
  selector: 'app-commentaire-bouton',
  templateUrl: './commentaire-bouton.component.html',
  styleUrls: ['./commentaire-bouton.component.css']
})
export class CommentaireBoutonComponent implements OnInit {
  @Input() openComment: Function;
  constructor(private router: Router) { }
  social: Social = {
    comment: null
  };

  ngOnInit() {
  }
  //TODO : changer url pas idea mais idea/{{id}}


}

interface Social {
  comment: boolean;
}
