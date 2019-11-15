export interface CommentaireModel {
    _id?: number;
    _texteCommentaire: string | null;
    _createdAt?: Date;
    _idCommentaire?: number;
    _idIdee?: number;
    _idMembre: number;
    _listeCommentairesEnfants?: Array<CommentaireModel>;
}
