import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopUpDetailsComponent } from '../popup-collaborateurs/pop-up-details.component';


@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent {
  private nombreCollaborateurs;

  constructor(public dialog: MatDialog) {
    this.nombreCollaborateurs = 10;
  }

openDialog() {
  const dialogRef = this.dialog.open(PopUpDetailsComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}




