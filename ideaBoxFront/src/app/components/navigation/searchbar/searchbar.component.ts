import { Component, OnInit } from '@angular/core';
import { IdeeService } from '../../../services/IdeeService';
import { Router } from '@angular/router';
import { InvokeFunctionExpr } from '@angular/compiler';

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

    this.router.navigateByUrl('/search/' + this.searchinput);
    this.searchinput = '';
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

  NavWithArrows(event: KeyboardEvent) {

    if (this.searchinput != null && this.searchinput != '') {

      this.cancelBlur();

      const list = document.getElementById('resultList');
      const firstElement = list.firstChild.nextSibling/*.firstChild.firstChild.nextSibling.firstChild*/;
      const input = document.getElementById('searchfocus');

      document.onkeydown = (e) => {
        switch (e.code) {
          case 'ArrowUp':
            if (document.activeElement != firstElement && document.activeElement != input) {
              (document.activeElement.previousSibling as HTMLElement).focus();
            } else {
              input.focus();
              const castedInput = (input as HTMLInputElement);
              setTimeout(() => castedInput.selectionStart = castedInput.selectionEnd = castedInput.value.length);
            }
            break;
          case 'ArrowDown':
            if (firstElement != null) {
              if (document.activeElement == input) {
                (firstElement as HTMLElement).focus();
              } else {
                const isNext = document.activeElement.nextSibling;
                if (isNext != null) {
                  (isNext as HTMLElement).focus();
                }
              }
            }
            break;
        }
      };
    }
  }
  gotolink(id) {

    this.setFocus();
    this.router.navigateByUrl('idea/' + id);
  }
}
