import { IdeeModel } from '../models/IdeeModel';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class IdeeService {

    // Bouchon : dev list idee;
    idees: Array<IdeeModel> = [
        { _id: 1, _titre: 'First Idea', _content: 'A content', _originalPosteur: 'alban_fooz_dev', _score: 100 }
    ];

    constructor() {
        for (let index = 2; index < 12; index++) {
            this.idees.push(
                {
                    _id: index,
                    _titre: index + 'First Idea',
                    _content: 'A content',
                    _originalPosteur: 'alban_fooz_dev',
                    _score: Math.floor((Math.random() * 100) + 1)
                }
            );
        }
    }



    ajouter(idee: IdeeModel) {

    }

    // eventuellement
    modifier(idee: IdeeModel) {

    }

    supprimer(idee: IdeeModel) {

    }

    recupererById(id: number): IdeeModel {
        return null;
    }

    recupererIdeeByPosteur(idPosteur: number): Array<IdeeModel> {       // historique idee du posteur
        return null;
    }

    // idee depuis l'historique des commentaires du posteur (IDK, au cas où)
    recupererIdeeByCommentaire(idCommentaire: number): IdeeModel {
        return null;
    }

}
