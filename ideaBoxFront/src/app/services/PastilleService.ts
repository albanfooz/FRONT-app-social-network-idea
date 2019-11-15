import { PastilleModel } from '../models/PastilleModel';
import { Injectable } from '@angular/core';
import { ICON_REGISTRY_PROVIDER } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class PastilleService {
    // bouchon dev list pastille

    private _pastille: Array<PastilleModel> = [
    ];// creation de la liste

    constructor() {// constructeur avec les variables push dans la liste
        this._pastille.push(
            {
                _id: 1,
                _categorie: 'Technologie',
                _icone: 'business'
            });
        this._pastille.push({
            _id: 2,
            _categorie: 'Etude/Formation',
            _icone: 'school'
        });
        this._pastille.push({
            _id: 3,
            _categorie: 'Jeux',
            _icone: 'sports_esports'
        });
        this._pastille.push({
            _id: 4,
            _categorie: 'Entraide',
            _icone: 'people_outline'
        });
        this._pastille.push({
            _id: 5,
            _categorie: 'Nature',
            _icone: 'emoji_nature'
        });
        this._pastille.push({
            _id: 6,
            _categorie: 'Ecologie',
            _icone: 'eco'
        });
        this._pastille.push({
            _id: 7,
            _categorie: 'Musique',
            _icone: 'music_note'
        });
        this._pastille.push({
            _id: 8,
            _categorie: 'Sport',
            _icone: 'sports_soccer'
        });
        this._pastille.push({
            _id: 9,
            _categorie: 'Cuisine',
            _icone: 'local_dining'
        });
        this._pastille.push({
            _id: 10,
            _categorie: 'Voyage',
            _icone: 'flight_takeoff'
        });
        this._pastille.push({
            _id: 11,
            _categorie: 'Animaux',
            _icone: 'pets'
        });

        this._pastille.push({
            _id: 12,
            _categorie: 'Livre',
            _icone: 'menu_book'
        });
        this._pastille.push({
            _id: 13,
            _categorie: 'Emploi',
            _icone: 'work'
        });
        this._pastille.push({
            _id: 14,
            _categorie: 'Santé',
            _icone: 'local_hospital'
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