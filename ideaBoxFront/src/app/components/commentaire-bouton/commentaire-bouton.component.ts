import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commentaire-bouton',
  templateUrl: './commentaire-bouton.component.html',
  styleUrls: ['./commentaire-bouton.component.css']
})
export class CommentaireBoutonComponent implements OnInit {
  constructor(private router: Router) { }
  social: Social = {
    comment: null
  };


  ngOnInit() {
  }

  openComment() {
    this.router.navigateByUrl('idea-page');
    setTimeout(() => { document.getElementById('texteCom').focus(); }, 10);
    console.log('ouverture de l\'idée, placement dans les commentaires');
  }
}
interface Social {
  comment: boolean;
}
