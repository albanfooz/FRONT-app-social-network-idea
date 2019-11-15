import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-ajout-idee',
  templateUrl: './page-ajout-idee.component.html',
  styleUrls: ['./page-ajout-idee.component.css']
})
export class PageAjoutIdeeComponent {
  creationIdeeForm = this.fb.group({
    _titre: [null, Validators.required],
    _categorie: [null, Validators.required],
    _image: null,
    _content: [null, Validators.required]
  });

  hasUnitNumber = false;
  private idee: IdeeModel;
  constructor(private fb: FormBuilder, private iService: IdeeService, private router: Router) { }

  onSubmit() {
    this.iService.ajouter(this.creationIdeeForm.value);
    this.router.navigateByUrl('');
  }
}
