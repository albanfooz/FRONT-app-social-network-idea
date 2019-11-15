import { PastilleModel } from '../models/PastilleModel';
import { Injectable } from '@angular/core';
import { ICON_REGISTRY_PROVIDER } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class PastilleService {
    // bouchon dev list pastille

    private _pastille: Array<PastilleModel> = [
        { _id: 1, _categorie: 'Technologie', _icone: 'url' }
    ];

    constructor() {
        this._pastille.push(
            {
                _id: 1,
                _categorie: 'Technologie',
                _icone: 'business'
            });
        this._pastille.push({
            _id: 2,
            _categorie: 'Etude / Formation',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 3,
            _categorie: 'Jeux',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 4,
            _categorie: 'Entre-Aide',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 5,
            _categorie: 'Nature',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 6,
            _categorie: 'Ecologie',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 7,
            _categorie: 'Musique',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 8,
            _categorie: 'Sport',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 9,
            _categorie: 'Gastronomie',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 10,
            _categorie: 'Voyage',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 11,
            _categorie: 'Femme',
            _icone: 'url'
        });

        this._pastille.push({
            _id: 12,
            _categorie: 'Homme',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 13,
            _categorie: 'Emploi',
            _icone: 'url'
        });
        this._pastille.push({
            _id: 14,
            _categorie: 'Santé',
            _icone: 'url'
        });
    }

    public get pastille(): Array<PastilleModel> {
        return this._pastille;
    }

    ajouter(pastille: PastilleModel) {

    }

    modifier(pastille: PastilleModel) {

    }

    recupererById(id: number): PastilleModel {
        return null;
    }

}