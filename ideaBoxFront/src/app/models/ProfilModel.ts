import { ShareReplayConfig } from 'rxjs/internal/operators/shareReplay';

export interface ProfilModel {
    _id?: number;
    _pseudo: string;
    _mail: string;
    _nom: string;
    _prenom: string;
    _motDePasse: string;
    _age?: number;
    _description?: string;
    _avatar?: string;

}