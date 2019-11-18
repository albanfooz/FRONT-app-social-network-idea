import { Component, Input } from '@angular/core';
import { IdeeService } from 'src/app/services/IdeeService';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  constructor(private ideeService: IdeeService) {
  }
}
