import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-full',
  templateUrl: './idea-full.component.html',
  styleUrls: ['./idea-full.component.css']
})
export class IdeaFullComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit() {
  }

}
