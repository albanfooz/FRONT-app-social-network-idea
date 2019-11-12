import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { IdeeService } from 'src/app/services/IdeeService';
import { Router } from '@angular/router';
import { IdeeModel } from 'src/app/models/IdeeModel';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  constructor(private ideeService: IdeeService) {
  }
}
