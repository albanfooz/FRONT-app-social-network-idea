import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-connexion',
  templateUrl: './menu-connexion.component.html',
  styleUrls: ['./menu-connexion.component.css']
})
export class MenuConnexionComponent implements OnInit {

  @Input() posmenu: string;

  constructor() {
  }

  ngOnInit() {
  }

  testSession() {


    console.log('test session');
  }

}
