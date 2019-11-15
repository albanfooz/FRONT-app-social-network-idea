import { IdeeModel } from '../models/IdeeModel';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class IdeeService {

    // Bouchon : dev list idee;
    // tslint:disable-next-line: variable-name
    private _idees: Array<IdeeModel> = [
        {
            _id: 1,
            _titre: 'First Idea',
            _content: 'A content',
            _originalPosteur: 'alban_fooz_dev',
            _score: 100,
            _image: 'https://picsum.photos/800/400?random=1'
        }
    ];

    constructor() {
        // Bouchon : dev list idee;
        for (let index = 2; index < 12; index++) {
            this._idees.push(
                {
                    _id: index,
                    _titre: 'Idea Number ' + index,
                    _content: 'A content',
                    _originalPosteur: 'alban_fooz_dev',
                    _score: Math.floor((Math.random() * 100) + 1),
                    _image: 'https://picsum.photos/800/400?random=' + index
                }
            );
        }
    }

    public get idees(): Array<IdeeModel> {
        return this._idees;
    }


    ajouter(idee: IdeeModel) {
        idee._id = this.idees.length + 1;
        this._idees.push(idee);

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
