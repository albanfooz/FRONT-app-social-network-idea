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
    _titre: [null, Validators.required],
    _categorie: [null, Validators.required],
    _image: null,
    _content: ['', Validators.required]
  });
  //RichTextEditor
  Editor = ClassicEditor;
  lengthOfContent = 0;

  hasUnitNumber = false;
  constructor(private fb: FormBuilder, private iService: IdeeService, private router: Router, private categorieService: CategorieService, private membreService: MembreService) { }

  onSubmit() {
    let tempIdee: IdeeModel = this.creationIdeeForm.value;
    //transform string en catégorie
    const tempCat: string = this.creationIdeeForm.value._categorie;
    const tempCatId: number = (this.categorieService.pastille.length + 1);
    this.categorieService.ajouter({ _id: tempCatId, _categorie: tempCat, _icone: tempCat });
    tempIdee._categorie = this.categorieService.recupererById(tempCatId);

    //posteur alban_fooz_dev par defaut
    tempIdee._originalPosteur = this.membreService.recupererMembreById(3);

    this.iService.ajouter(tempIdee);
    this.router.navigateByUrl('');
  }

  onUpdate() {
    this.lengthOfContent = this.creationIdeeForm.value._content.length;
  }
}
