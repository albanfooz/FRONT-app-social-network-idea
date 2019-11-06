import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-post',
  templateUrl: './idea-post.component.html',
  styleUrls: ['./idea-post.component.css']
})
export class IdeaPostComponent implements OnInit {
  @Input() i: number;
  @Input() card: any;
  constructor() { }

  ngOnInit() {
  }

}
