import { Component, Input } from '@angular/core';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {

  scrollDistance = 2;
  scrollThrottle = 50;

  private nbrIdees = 5;
  private displayedIdees = 1;
  private listIdees = new Array<IdeeModel>();

  constructor(private ideeService: IdeeService) {

    this.refreshDisplayedIdees();
  }

  private refreshDisplayedIdees() {

    let i = this.displayedIdees;
    this.displayedIdees += this.nbrIdees;

    for (i; i < this.displayedIdees; i++) {

      if (this.ideeService.recupererById(i)) {
        this.listIdees.push(this.ideeService.recupererById(i));
      }
    }
  }

  onScrollDown() {

    this.refreshDisplayedIdees();
    console.log('Displayed Ideas = ' + this.displayedIdees);
  }

}
