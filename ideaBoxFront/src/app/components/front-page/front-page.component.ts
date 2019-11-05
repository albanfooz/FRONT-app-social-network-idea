import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, content: 'This is the Content' },
          { title: 'Card 2', cols: 1, rows: 1, content: 'This is the Content' },
          { title: 'Card 3', cols: 1, rows: 1, content: 'This is the Content' },
          { title: 'Card 4', cols: 1, rows: 1, content: 'This is the Content' }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, content: 'This is the Content' },
        { title: 'Card 2', cols: 2, rows: 1, content: 'This is the Content' },
        { title: 'Card 3', cols: 2, rows: 1, content: 'This is the Content' },
        { title: 'Card 4', cols: 2, rows: 1, content: 'This is the Content' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
