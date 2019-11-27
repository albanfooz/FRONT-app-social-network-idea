import { Component, OnInit } from '@angular/core';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  idees: Array<IdeeModel> = null;
  constructor(private ideeService: IdeeService) { }

  ngOnInit() {
    const obs = this.ideeService.recupererAllIdees();

  }

}
