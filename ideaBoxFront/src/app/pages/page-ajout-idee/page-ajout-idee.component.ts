import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';
import { Route, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategorieService } from 'src/app/services/CategorieService';
import { MembreService } from 'src/app/services/MembreService';

@Component({
  selector: 'app-page-ajout-idee',
  templateUrl: './page-ajout-idee.component.html',
  styleUrls: ['./page-ajout-idee.component.css']
})
export class PageAjoutIdeeComponent {
  creationIdeeForm = this.fb.group({
    titre: [null, Validators.required],
    categorie: [null, Validators.required],
    _image: null,
    description: ['', Validators.required]
  });
  // RichTextEditor
  Editor = ClassicEditor;
  lengthOfDescription = 0;

  hasUnitNumber = false;
  constructor(private fb: FormBuilder, private iService: IdeeService, private router: Router, private categorieService: CategorieService, private membreService: MembreService) { }

  onSubmit() {
    let tempIdee: IdeeModel = this.creationIdeeForm.value;
    //transform string en catégorie
    const tempCat: string = this.creationIdeeForm.value._categorie;
    const tempCatId: number = (this.categorieService.pastille.length + 1);
    this.categorieService.ajouter({ _id: tempCatId, _categorie: tempCat, _icone: tempCat });
    tempIdee.categorie = this.categorieService.recupererById(tempCatId);

    //posteur alban_fooz_dev par defaut
    tempIdee.originalPosteur = this.membreService.recupererMembreByIdBouchon(3);
    if (!this.creationIdeeForm.controls['categorie'].hasError('required') && !this.creationIdeeForm.controls['description'].hasError('required') && !this.creationIdeeForm.controls['titre'].hasError('required')) {

      this.iService.ajouter(tempIdee);
      this.router.navigateByUrl('');
    }
  }

  onUpdate() {
    this.lengthOfDescription = this.creationIdeeForm.value.description.length;
  }
}
