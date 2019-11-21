import { Component, OnInit, Input } from '@angular/core';
import { IdeeModel } from 'src/app/models/IdeeModel';

@Component({
  selector: 'app-idee-list',
  templateUrl: './idee-list.component.html',
  styleUrls: ['./idee-list.component.css']
})
export class IdeeListComponent implements OnInit {

  scrollDistance = 1;
  scrollThrottle = 150;

  private perPage = 5;
  private nbrIdees = 0;

  private displayedIdees = new Array<IdeeModel>();

  @Input() ideesList: Array<IdeeModel>;

  constructor() { }

  private refreshDisplayedIdees() {

    let i = this.nbrIdees;
    this.nbrIdees += this.perPage;

    for (i; i < this.nbrIdees; i++) {

      if (this.ideesList[i]) {
        this.displayedIdees.push(this.ideesList[i]);
      }

    }
  }

  onScrollDown() {

    this.refreshDisplayedIdees();
    console.log('Displayed Ideas = ' + this.nbrIdees);
  }
  ngOnInit() {

    this.refreshDisplayedIdees();
  }

}
