import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-ajout-idee',
  templateUrl: './page-ajout-idee.component.html',
  styleUrls: ['./page-ajout-idee.component.css']
})
export class PageAjoutIdeeComponent {
  creationIdeeForm = this.fb.group({
    titre: [null, Validators.required],
    categorie: [null, Validators.required],
    imageURL: null,
    contenu: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert('Thanks!');
  }
}
