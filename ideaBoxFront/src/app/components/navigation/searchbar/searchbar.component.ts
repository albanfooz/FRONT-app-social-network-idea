import { Component, OnInit, Inject } from '@angular/core';
import { IdeeService } from '../../../services/IdeeService';
import { ActivatedRoute, Router } from '@angular/router';

export interface IDialogData {

  searchinput: string;
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private ids: IdeeService, private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ideas = this.ids.idees;

  searchinput: string;
  isOpen = false;
  isBlurActive = true;

  submit() {

    if (this.searchinput != null && this.searchinput != '') {

      this.router.navigateByUrl(`/search/${this.searchinput}`);
    }
  }

  setFocus() {
    if (this.isOpen) {
      setTimeout(() => { document.getElementById('searchfocus').blur(); }, 0);
      this.searchinput = '';
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = !this.isOpen;
      setTimeout(() => { document.getElementById('searchfocus').focus(); }, 500);
    }
  }

  ngOnInit() {
  }

  cancelBlur() {

    this.isBlurActive = false;
  }
  activeBlur() {

    this.isBlurActive = true;
  }

}
