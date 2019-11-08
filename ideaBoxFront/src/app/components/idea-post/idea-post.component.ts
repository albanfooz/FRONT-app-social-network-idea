import { Component, OnInit, Input } from '@angular/core';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';


@Component({
  selector: 'app-idea-post',
  templateUrl: './idea-post.component.html',
  styleUrls: ['./idea-post.component.css']
})
export class IdeaPostComponent implements OnInit {
  @Input() i: number;
  @Input() card: any;
  @Input() idee: IdeeModel;
  constructor() {
  }

  ngOnInit() {
  }

}
