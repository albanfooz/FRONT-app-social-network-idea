import { CollaborateurPopUp } from '../models/CollaborateurPopUp';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CollaborateurService {

  constructor() { }

  recupereList(): Array<CollaborateurPopUp> {
    const result = new Array<CollaborateurPopUp>();
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: prefer-const
    let c1 = {
      pseudo: ' Smith',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c2 = {
      pseudo: ' Smith',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c3 = {
      pseudo: ' Smith',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c4 = {
      pseudo: ' Smith',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c5 = {
      pseudo: ' Smith05',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c6 = {
      pseudo: ' Smith',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c7 = {
      pseudo: ' Smith',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c8 = {
      pseudo: ' Smith',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c9 = {
      pseudo: ' Smith',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c10 = {
      pseudo: ' Smith10',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c11 = {
      pseudo: ' Smith11',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };
    let c12 = {
      pseudo: ' Smith12',
      img: 'https://improvyourself.fr/wp-content/uploads/2017/10/Photo-profil-libert%C3%A9-mentale-rond-1-300x300.png'
    };

    result.push(c1);
    result.push(c2);
    result.push(c3);
    result.push(c4);
    result.push(c5);
    result.push(c6);
    result.push(c7);
    result.push(c8);
    result.push(c9);
    result.push(c10);
    result.push(c11);
    result.push(c12);

    return result;
  }
}
