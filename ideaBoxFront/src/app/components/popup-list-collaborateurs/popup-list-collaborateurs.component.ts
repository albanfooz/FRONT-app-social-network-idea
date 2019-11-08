import { Component, OnInit } from '@angular/core';
import { CollaborateurService } from 'src/app/service/CollaborateurService';
import { CollaborateurPopUp } from 'src/app/model/collaborateurPopUp';

@Component({
  selector: 'app-popup-list-collaborateurs',
  templateUrl: './popup-list-collaborateurs.component.html',
  styleUrls: ['./popup-list-collaborateurs.component.css']
})
export class PopupListCollaborateursComponent implements OnInit {
  private collaborateurList: Array<CollaborateurPopUp>;
  constructor(private collaborateurService: CollaborateurService) {

  }

  ngOnInit() {
    this.collaborateurList = this.collaborateurService.recupereList();
  }

}
