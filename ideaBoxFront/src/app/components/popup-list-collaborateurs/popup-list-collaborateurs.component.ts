import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CollaborateurService } from 'src/app/services/CollaborateurService';
import { CollaborateurPopUp } from 'src/app/models/CollaborateurPopUp';
import { MembreService } from 'src/app/services/MembreService';


@Component({
  selector: 'app-popup-list-collaborateurs',
  templateUrl: './popup-list-collaborateurs.component.html',
  styleUrls: ['./popup-list-collaborateurs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupListCollaborateursComponent implements OnInit {
  private collaborateurList: Array<CollaborateurPopUp>;
  constructor(private collaborateurService: CollaborateurService, private membreService: MembreService) {

  }

  ngOnInit() {
    this.collaborateurList = this.collaborateurService.recupereList();
  }
}
