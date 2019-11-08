import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IDialogData {

  searchinput: string;
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchinput: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(SearchbarPopupComponent, {
      width: '250px',
      data: { searchinput: this.searchinput }
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-searchbar-popup',
  templateUrl: 'searchbar-popup.component.html'
})
export class SearchbarPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<SearchbarPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
