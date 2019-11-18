import { Component, OnInit, Input } from '@angular/core';
import { IdeeModel } from 'src/app/models/IdeeModel';

@Component({
  selector: 'app-idee-list',
  templateUrl: './idee-list.component.html',
  styleUrls: ['./idee-list.component.css']
})
export class IdeeListComponent implements OnInit {
  @Input() ideesList: Array<IdeeModel>;
  constructor() { }

  ngOnInit() {
  }

}
