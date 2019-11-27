import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent implements OnInit {

  searchcontent: string;

  resultidees = new Array<IdeeModel>();

  constructor(private route: ActivatedRoute, private ideeService: IdeeService) { }

  ngOnInit() {
    this.searchcontent = this.route.snapshot.params['searchContent'];
    for (let idee of this.ideeService.idees) {

      if (
        idee.titre.toLowerCase().indexOf(this.searchcontent.toLowerCase()) >= 0 ||
        idee.categorie._categorie.toLowerCase().indexOf(this.searchcontent.toLowerCase()) >= 0 ||
        idee.originalPosteur._pseudo.toLowerCase().indexOf(this.searchcontent.toLowerCase()) >= 0 ||
        idee.description.toLowerCase().indexOf(this.searchcontent.toLowerCase()) >= 0
      ) {
        this.resultidees.push(idee);
      }
    }
  }

}
