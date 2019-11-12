import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentaireModel } from '../models/CommentaireModel';

// Remplace l'ajout dans les providers du AppModule
@Injectable(
    { providedIn: 'root' }
)
export class CommentaireService {
    //TODO: changer URL
    private URL = 'http://localhost:7000/commentaire';

    // Fabrique le champ directement dans les paramètres du constructor avec le mot clé "private"
    constructor(private http: HttpClient) {
    }

    creation(data: CommentaireModel) {
        console.log('creation faite');
        console.log(data);
        /* const obs = this.http.post(this.URL, data);
         obs.subscribe((reponse) => { console.log(reponse); });*/
    }
}
