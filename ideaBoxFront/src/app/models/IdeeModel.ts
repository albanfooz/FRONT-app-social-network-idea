
import { CategorieModel } from './CategorieModel';
import { MembreModel } from './MembreModel';

export interface IdeeModel {
    // tslint:disable: variable-name
    id?: number;
    titre: string;
    categorie: CategorieModel;
    originalPosteur: MembreModel;
    description: string; // sujet à un changement
    score: number; // pour le moment, on utilisera voteDTO plus tard
    _image?: string; // url de l'image, deviendra un fichier de type image
    collaborateurs: Array<MembreModel>;   // list de collaborateurs
    createdAt: Date;
}
