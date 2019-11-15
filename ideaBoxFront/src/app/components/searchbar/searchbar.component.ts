import { Component, OnInit, Inject, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
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

  constructor(public dialog: MatDialog) { }

  searchinput: string;
  isOpen = false;

  openDialog(): void {
    this.dialog.open(SearchbarPopupComponent, {
      width: '250px',
      data: { searchinput: this.searchinput }
    });
  }

  setFocus() {
    if (this.isOpen) {
      setTimeout(() => { document.getElementById('searchfocus').blur(); }, 0);
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = !this.isOpen;
      setTimeout(() => { document.getElementById('searchfocus').focus(); }, 500);
    }
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
