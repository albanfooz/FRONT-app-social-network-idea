import { MembreModel } from './MembreModel';

export interface CommentaireModel {
    _id?: number;
    _contenu: string | null;
    _createdAt?: Date;
    _score: number;
    _idCommentaire?: number;
    _idIdee?: number;
    _membre: MembreModel;
    _listeCommentairesEnfants?: Array<CommentaireModel>;
}
