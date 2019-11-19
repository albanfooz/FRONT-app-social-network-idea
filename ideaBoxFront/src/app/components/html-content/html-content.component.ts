import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-content',
  template: '<p>{{toHTML}}</p>',
  styleUrls: ['./html-content.component.css']
})
export class HtmlContentComponent implements OnInit {
  toHTML = '<h2 class="mat-h2">hello there</h2>';
  constructor() { }

  ngOnInit() {
  }

}
