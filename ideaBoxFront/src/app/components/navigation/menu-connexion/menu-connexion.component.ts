import { Component, OnInit, Input, Inject, RootRenderer } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from '../searchbar/searchbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-connexion',
  templateUrl: './menu-connexion.component.html',
  styleUrls: ['./menu-connexion.component.css']
})
export class MenuConnexionComponent implements OnInit {

  @Input() posmenu: string;

  public estConnecte = this.cookie.get('Login');

  constructor(public cookie: CookieService, public dialog: MatDialog, public router: Router) {
  }

  ngOnInit() {
  }

  deleteSession() {

    this.cookie.deleteAll('/');
    this.estConnecte = this.cookie.get('Login');
    window.location.href = '';
  }

  openDialog(): void {
    this.dialog.open(ConnexionPopupComponent, {
      width: '250px'
    });
  }
}

@Component({
  selector: 'app-connexion-popup',
  templateUrl: 'connexion-popup.component.html'
})
export class ConnexionPopupComponent {

  public estConnecte = this.cookie.get('Login');

  constructor(
    public dialogRef: MatDialogRef<ConnexionPopupComponent>,
    public cookie: CookieService,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  createSession() {

    this.cookie.set('Login', 'true', 0, '/');
    this.estConnecte = this.cookie.get('Login');
    this.dialogRef.close();
    window.location.reload();
  }
}
