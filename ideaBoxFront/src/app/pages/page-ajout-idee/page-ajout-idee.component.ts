import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';
import { Route, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  //RichTextEditor
  Editor = ClassicEditor;


hasUnitNumber = false;
  private idee: IdeeModel;
constructor(private fb: FormBuilder, private iService: IdeeService, private router: Router) { }

onSubmit() {
  let tempIdee: IdeeModel = this.creationIdeeForm.value;
  //transform string en catégorie
  const tempCat: string = this.creationIdeeForm.value._categorie;
  tempIdee._categorie = { _categorie: tempCat, _icone: tempCat };
  //console.log(tempIdee);

  this.iService.ajouter(tempIdee);
  this.router.navigateByUrl('');
}
}
