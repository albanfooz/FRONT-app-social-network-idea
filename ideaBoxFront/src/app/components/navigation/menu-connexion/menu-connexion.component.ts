import { Component, OnInit, Input, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-menu-connexion',
  templateUrl: './menu-connexion.component.html',
  styleUrls: ['./menu-connexion.component.css']
})
export class MenuConnexionComponent implements OnInit {

  @Input() posmenu: string;

  public estConnecte = this.cookie.get('Login');

  constructor(public cookie: CookieService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  createSession() {

    this.cookie.set('Login', 'true');
    this.estConnecte = this.cookie.get('Login');
  }

  deleteSession() {

    this.cookie.deleteAll();
    this.estConnecte = this.cookie.get('Login');
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
    @Inject(MAT_DIALOG_DATA) public data: IDialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  createSession() {

    this.cookie.set('Login', 'true');
    this.estConnecte = this.cookie.get('Login');
    this.dialogRef.close();
    window.location.reload();
  }
}
