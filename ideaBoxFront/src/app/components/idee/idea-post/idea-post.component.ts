import { Component, OnInit, Input, Output } from '@angular/core';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-idea-post',
  templateUrl: './idea-post.component.html',
  styleUrls: ['./idea-post.component.css']
})
export class IdeaPostComponent implements OnInit {
  @Input() idee: IdeeModel = null;
  openComment: Function;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.openComment = this.openComm.bind(this);
  }
  public openComm() {
    this.router.navigateByUrl('idea/' + this.idee.id);
    setTimeout(() => { document.getElementById('texteCom').focus(); }, 10);
    //console.log('ouverture de l\'idée, placement dans les commentaires');
    //this.router.navigateByUrl('idea/' + this.idee._id+"/commentaire"+this.commentaire._id);
    //console.log('ouvertur de l'input dans le commentaire');
  }
}
