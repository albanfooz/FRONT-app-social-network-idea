import { CollaborateurPopUp } from '../model/collaborateurPopUp';
import { Injectable } from '@angular/core';

@Injectable ( {providedIn: 'root'})

export class CollaborateurService {

  constructor() {}

  recupereList(): Array<CollaborateurPopUp> {
    const result = new Array<CollaborateurPopUp>();
    let c1 = new CollaborateurPopUp();
    c1.img = "http://img.over-blog-kiwi.com/0/55/09/86/201304/ob_44225be04fd586523d98f443e8e1a818_collaborateur.jpg";
    c1.pseudo = "smith";
    result.push(c1);

    return result;
  }



}
