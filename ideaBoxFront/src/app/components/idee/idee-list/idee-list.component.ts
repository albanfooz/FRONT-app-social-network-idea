import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { interval as observableInterval } from 'rxjs';
import { takeWhile, scan, tap } from 'rxjs/operators';
import { timeout } from 'q';

@Component({
  selector: 'app-idee-list',
  templateUrl: './idee-list.component.html',
  styleUrls: ['./idee-list.component.css']
})
export class IdeeListComponent implements OnInit {

  windowScrolled = false;

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

  toTop(el) {

    setTimeout(() => { this.windowScrolled = false; }, 700);
    this.smoothScroll(el);
  }

  smoothScroll(el) {
    const duration = 600;
    const interval = 5;
    const move = el.scrollTop * interval / duration;
    observableInterval(interval).pipe(
      scan((acc, curr) => acc - move, el.scrollTop),
      tap(position => el.scrollTop = position),
      takeWhile(val => val > 0)).subscribe();
  }
}
