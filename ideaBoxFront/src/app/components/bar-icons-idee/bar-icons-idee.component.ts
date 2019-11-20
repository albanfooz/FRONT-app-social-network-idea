import { Component, OnInit, Input } from '@angular/core';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { CommentaireModel } from 'src/app/models/CommentaireModel';


@Component({
  selector: 'app-bar-icons-idee',
  templateUrl: './bar-icons-idee.component.html',
  styleUrls: ['./bar-icons-idee.component.css']
})
export class BarIconsIdeeComponent implements OnInit {

  @Input() score: number;

  @Input() openComment: Function;

  constructor() { }

  ngOnInit() {
  }


}
