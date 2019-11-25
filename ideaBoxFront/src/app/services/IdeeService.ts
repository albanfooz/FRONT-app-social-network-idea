import { IdeeModel } from '../models/IdeeModel';
import { Injectable } from '@angular/core';
import { CategorieService } from './CategorieService';
import { MembreService } from './MembreService';
import { CommentaireModel } from '../models/CommentaireModel';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class IdeeService {
    contentBouchon = '<p>Et et veniam pariatur elit ipsum do. Laboris commodo Lorem incididunt amet id deserunt in. Nostrud quis non ullamco aute laboris nisi dolore esse officia laborum anim amet et pariatur.</p><p> Nisi officia consectetur ex ad reprehenderit consectetur.Excepteur sunt in enim anim quis esse deserunt culpa elit mollit culpa.Consectetur duis aute ut voluptate laborum consequat voluptate cillum dolor deserunt eu in enim.Consequat reprehenderit labore aliqua laborum sit aute commodo.Sunt enim commodoexercitation mollit fugiat qui ipsum deserunt.Eu Lorem non commodo nostrud officia tempor ipsumproident aliqua enim culpa cillum nostrud.</p> <p> Magna enim consequat irure elit sint aute sint esse exercitation ea reprehenderit.Consequat exercitationexercitation do dolor laboris laboris tempor quis incididunt.Id pariatur veniam laboris mollit do ipsum culpa reprehenderit occaecat mollit cupidatat laborum nulla ut.Proident veniam consequat amet laboreofficia irure irure.Labore quis cupidatat culpa culpa incididunt.Exercitation dolor amet officiamollit.</p> <p> Cillum dolore ipsum ea tempor do eu elit quis reprehenderit consequat anim esse mollit proident.Adipisicing excepteur irure anim cillum sint do quis ullamco nostrud.Dolor est commodo eiusmod exlaborum eu dolor magna quis ullamco est adipisicing qui culpa.Commodo ad velit culpa irure anim.Iddeserunt qui et sit enim culpa velit minim mollit.In proident aute occaecat et.</p> <p> Et et veniam pariatur elit ipsum do.Laboris commodo Lorem incididunt amet id deserunt in.Nostrud quisnon ullamco aute laboris nisi dolore esse officia laborum anim amet et pariatur.</p> <p> Nisi officia consectetur ex ad reprehenderit consectetur.Excepteur sunt in enim anim quis esse deseruntculpa elit mollit culpa.Consectetur duis aute ut voluptate laborum consequat voluptate cillum dolordeserunt eu in enim.Consequat reprehenderit labore aliqua laborum sit aute commodo.Sunt enim commodoexercitation mollit fugiat qui ipsum deserunt.Eu Lorem non commodo nostrud officia tempor ipsumproident aliqua enim culpa cillum nostrud.</p> <p> Magna enim consequat irure elit sint aute sint esse exercitation ea reprehenderit.Consequat exercitationexercitation do dolor laboris laboris tempor quis incididunt.Id pariatur veniam laboris mollit do ipsum culpa reprehenderit occaecat mollit cupidatat laborum nulla ut.Proident veniam consequat amet laboreofficia irure irure.Labore quis cupidatat culpa culpa incididunt.Exercitation dolor amet officiamollit.</p> <p> Cillum dolore ipsum ea tempor do eu elit quis reprehenderit consequat anim esse mollit proident.Adipisicing excepteur irure anim cillum sint do quis ullamco nostrud.Dolor est commodo eiusmod exlaborum eu dolor magna quis ullamco est adipisicing qui culpa.Commodo ad velit culpa irure anim.Iddeserunt qui et sit enim culpa velit minim mollit.In proident aute occaecat et.</p>'
    // Bouchon : dev list idee;
    // tslint:disable-next-line: variable-name
    private _idees: Array<IdeeModel> = [
        {
            _id: 1,
            _titre: 'First Idea',
            _content: this.contentBouchon,
            _originalPosteur: this.membreService.recupererMembreByIdBouchon(3),
            _categorie: this.categorieService.pastille.find(({ _id }) => _id === 1),
            _score: 321,
            _image: 'https://picsum.photos/800/400?random=1'
        }
    ];

    constructor(private categorieService: CategorieService, private membreService: MembreService, private http: HttpClient) {
        // Bouchon : dev list idee;
        for (let index = 2; index < 15; index++) {
            this._idees.push(
                {
                    _id: index,
                    _titre: 'Idea Number ' + index,
                    _content: this.contentBouchon,
                    _originalPosteur: this.membreService.recupererMembreByIdBouchon(index),
                    _categorie: this.categorieService.pastille.find(({ _id }) => _id === index),
                    _score: Math.floor((Math.random() * 100) + 1),
                    _image: 'https://picsum.photos/800/400?random=' + index
                }

            );
        }
        // more data for idees with same categorie
        this.idees.push(
            {
                _id: this.idees.length + 1,
                _titre: 'Idea Number ' + (this.idees.length + 1),
                _content: this.contentBouchon,
                _originalPosteur: this.membreService.recupererMembreByIdBouchon(3),
                _categorie: this.categorieService.pastille.find(({ _id }) => _id === 1),
                _score: Math.floor((Math.random() * 100) + 1),
                _image: 'https://picsum.photos/800/400?random=' + (this.idees.length + 1)
            }
        );
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

    recupererIdeesByPosteur(idPosteur: number): Array<IdeeModel> {       // historique idee du posteur
        return this.idees.filter(element => { if (element._originalPosteur._id == idPosteur) { return element; } });
    }

    recupererIdeesByCategorie(idCategorie: number): Array<IdeeModel> {
        return this.idees.filter(element => { if (element._categorie._id == idCategorie) { return element; } });
    }

    // idee depuis l'historique des commentaires du posteur (IDK, au cas où)
    recupererIdeeByCommentaire(commentaire: CommentaireModel): IdeeModel {
        return this.idees.find(({ _id }) => _id == commentaire._idIdee);
    }
}

