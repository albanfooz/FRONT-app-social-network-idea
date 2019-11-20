import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilModel } from 'src/app/models/ProfilModel';
import { InscriptionService } from 'src/app/services/InscriptionServices';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {
  creationInscriptionForm: FormGroup;
  hasUnitNumber = false;

  private inscription: ProfilModel;
  constructor(private fb: FormBuilder, private inscriptionService: InscriptionService, private router: Router) { }

  constructor(private fb: FormBuilder, private InscriptionService: InscriptionService, private router: Router) {
    this.creationInscriptionForm = this.fb.group({
      _nom: [null],
      _prenom: [null],
      _mail: [null, Validators.required],
      _pseudo: [null, Validators.required],
      _motDePasse: [null, Validators.required]
    });
  }


  ngOnInit() {
  }

  onSubmit() {
    this.inscriptionService.inscription(this.creationInscriptionForm.value);

  }
}
