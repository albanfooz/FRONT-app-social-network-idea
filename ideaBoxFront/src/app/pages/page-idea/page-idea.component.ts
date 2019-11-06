import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-idea',
  templateUrl: './page-idea.component.html',
  styleUrls: ['./page-idea.component.css']
})
export class PageIdeaComponent implements OnInit {
  card = { title: 'Card 1', cols: 2, rows: 1, content: 'This is the Content' };
  constructor() { }

  ngOnInit() {
  }

}
