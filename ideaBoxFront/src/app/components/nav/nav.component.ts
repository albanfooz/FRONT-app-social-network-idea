import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  links = [
    { name: 'Nouvelle idée', url: '/ajout-idee', icon: 'lightbulb' },
    { name: 'Nouvelle idée', url: '/ajout-idee', icon: 'lightbulb' },
    { name: 'Nouvelle idée', url: '/ajout-idee', icon: 'lightbulb' }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
