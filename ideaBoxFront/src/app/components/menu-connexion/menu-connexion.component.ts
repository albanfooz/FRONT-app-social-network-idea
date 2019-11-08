import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu-connexion',
  templateUrl: './menu-connexion.component.html',
  styleUrls: ['./menu-connexion.component.css']
})
export class MenuConnexionComponent implements OnInit {

  @Input() posmenu: string;

  public estConnecte = this.cookie.get('Login');

  constructor(public cookie: CookieService) {
  }

  ngOnInit() {
  }

  createSession() {

    console.log(this.estConnecte);
    this.cookie.set('Login', 'true');
    this.estConnecte = this.cookie.get('Login');
    console.log(this.estConnecte);
  }

  deleteSession() {

    console.log(this.estConnecte);
    this.cookie.deleteAll();
    this.estConnecte = this.cookie.get('Login');
    console.log(this.estConnecte);
  }
}
