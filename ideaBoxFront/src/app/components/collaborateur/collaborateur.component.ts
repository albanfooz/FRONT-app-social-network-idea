import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
//import { PopUpListCollaborateursComponent  } from '../popup-list-collaborateurs/popup-list-collaborateurs.component';


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
  /*const dialogRef = this.dialog.open(PopUpListCollaborateursComponent );

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });*/
}
}




