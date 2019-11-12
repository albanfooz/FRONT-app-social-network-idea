export interface IdeeModel {
    // tslint:disable: variable-name
    _id?: number;
    _titre: string;
    _originalPosteur: string;
    _content: string; // sujet à un changement
    _score: number; // pour le moment, on utilisera voteDTO plus tard
    _image?: string; // url de l'image, deviendra un fichier de type image
    // collaborateurs;   // list de collaborateurs
}
