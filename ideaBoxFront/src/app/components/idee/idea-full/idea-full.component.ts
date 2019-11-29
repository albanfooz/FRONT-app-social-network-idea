import { Component, OnInit, Input } from '@angular/core';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-full',
  templateUrl: './idea-full.component.html',
  styleUrls: ['./idea-full.component.css']
})
export class IdeaFullComponent implements OnInit {
  @Input() idee: IdeeModel;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  public openComment() {
    // reroute sur la même idée (en soit : useless sur idee full)
    //this.router.navigateByUrl('idea/' + this.idee._id);
    //setTimeout(() => { document.getElementById('texteCom').focus(); }, 10);
  }
}


