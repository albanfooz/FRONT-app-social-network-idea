import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';

@Component({
  selector: 'app-page-idea',
  templateUrl: './page-idea.component.html',
  styleUrls: ['./page-idea.component.css']
})
export class PageIdeaComponent implements OnInit {

  id: number;
  idee: IdeeModel;

  constructor(private route: ActivatedRoute, private ideeService: IdeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['ideaId'];
    this.idee = this.ideeService.recupererById(this.id);


  }

}
