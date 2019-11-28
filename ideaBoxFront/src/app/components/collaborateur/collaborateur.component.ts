import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupListCollaborateursComponent } from '../popup-list-collaborateurs/popup-list-collaborateurs.component';


@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent {
  private nombreCollaborateurs;

  constructor(public dialog: MatDialog) {
    this.nombreCollaborateurs = Math.floor((Math.random() * 50) + 1);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupListCollaborateursComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}




