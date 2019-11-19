import { Component, OnInit, Input } from '@angular/core';
import { IdeeModel } from 'src/app/models/IdeeModel';

@Component({
  selector: 'app-idea-full',
  templateUrl: './idea-full.component.html',
  styleUrls: ['./idea-full.component.css']
})
export class IdeaFullComponent implements OnInit {
  @Input() idee: IdeeModel;
  constructor() { }
  Test = '<h2 class="mat-h2">TEST<h2>';

  ngOnInit() {
  }

}
