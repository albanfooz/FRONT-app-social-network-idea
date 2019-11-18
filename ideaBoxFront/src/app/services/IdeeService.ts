import { IdeeModel } from '../models/IdeeModel';
import { Injectable } from '@angular/core';
import { CategorieService } from './CategorieService';


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
            _categorie:  this.categorieService.pastille.find(({ _id }) => _id == 1),
            _score: 100,
            _image: 'https://picsum.photos/800/400?random=1'
        }
    ];

    constructor(private categorieService: CategorieService) {
        // Bouchon : dev list idee;
        for (let index = 2; index < 12; index++) {
            this._idees.push(
                {
                    _id: index,
                    _titre: 'Idea Number ' + index,
                    _content: 'A content',
                    _originalPosteur: 'alban_fooz_dev',
                    _categorie: this.categorieService.pastille.find(({ _id }) => _id == index),
                    _score: Math.floor((Math.random() * 100) + 1),
                    _image: 'https://picsum.photos/800/400?random=' + index
                }

            );
        }
        //more data for idees with same categorie
        this.idees.push(
            {
                _id: this.idees.length+1,
                _titre: 'Idea Number ' + (this.idees.length+1),
                _content: 'A content',
                _originalPosteur: 'alban_fooz_dev',
                _categorie: this.categorieService.pastille.find(({ _id }) => _id == 1),
                _score: Math.floor((Math.random() * 100) + 1),
                _image: 'https://picsum.photos/800/400?random=' + (this.idees.length+1)
            }
        )
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
        return this.idees.find(({ _id }) => _id == id);
    }

    recupererIdeeByPosteur(idPosteur: number): Array<IdeeModel> {       // historique idee du posteur
        return null;
    }

    recupererIdeeByCategorie(idCategorie: number): Array<IdeeModel> {
        return this.idees.filter(element => {if (element._categorie._id == idCategorie) { return element };});
    }

    // idee depuis l'historique des commentaires du posteur (IDK, au cas où)
    recupererIdeeByCommentaire(idCommentaire: number): IdeeModel {
        return null;
    }

}
