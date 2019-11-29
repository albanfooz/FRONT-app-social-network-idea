import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentaireModel } from '../models/CommentaireModel';
import { MembreService } from './MembreService';
import { TouchSequence } from 'selenium-webdriver';

// Remplace l'ajout dans les providers du AppModule
@Injectable(
    { providedIn: 'root' }
)
export class CommentaireService {
    // TODO: changer URL
    private URL = 'http://localhost:7000/commentaire';

    // bouchon commentaires
    // tslint:disable-next-line: variable-name
    _comments: Array<CommentaireModel> = [];



    // Fabrique le champ directement dans les paramètres du constructor avec le mot clé "private"
    constructor(private http: HttpClient, private membreService: MembreService) {
        for (let index = 1; index < 10; index++) {
            this._comments.push(
                {
                    _id: index,
                    _membre: this.membreService.recupererMembreByIdBouchon(index),
                    _texteCommentaire: 'commentaire du membre , Cillum dolore ipsum ea tempor do eu elit quis reprehenderit consequat anim esse mollit proident.Adipisicing excepteur irure anim',
                    _score: Math.floor((Math.random() * 100) + 1)
                }
            );
        }
    }

    creation(data: CommentaireModel) {
        //console.log('creation faite');
        //console.log(data);
        /* const obs = this.http.post(this.URL, data);
         obs.subscribe((reponse) => { console.log(reponse); });*/

    }
}
