import { VoteModel } from '../models/VoteModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO: remplir les fonctions

@Injectable({ providedIn: 'root' })
export class VoteService {
    constructor(private http: HttpClient) {
    }
    ajouter(vote: VoteModel) {
        let result = this.http.post("http://localhost:8080/commentaire/12/votes", vote);
        return result;
    }
    modifier(vote: VoteModel) {

    }
    recupererParIdee(): Array<VoteModel> {
        return null;
    }
    recupererParCommentaire(): Array<VoteModel> {
        return null;
    }
}
