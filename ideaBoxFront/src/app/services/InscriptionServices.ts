import { ProfilModel } from 'src/app/models/ProfilModel';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class InscriptionService {

    // Bouchon : dev list idee;
    // tslint:disable-next-line: variable-name
    private _Profils: Array<ProfilModel> = [
        {
            _id: 1,
            _pseudo: '',
            _mail: '',
            _nom: 'string',
            _prenom: 'string',
            _motDePasse: 'string',
            _age: 10,
            _description: 'string',
            _avatar: 'string'

        }
    ];

    constructor() {
        for (let index = 2; index < 12; index++) {
            this._Profils.push(
                {
                    _id: index,
                    _pseudo: 'Pseudo' + index,
                    _mail: '',
                    _nom: 'Member' + index,
                    _prenom: 'Prenom' + index,
                    _motDePasse: 'string',
                    _age: 10,
                    _description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius convallis pulvinar. Suspendisse dictum orci odio, eu pulvinar leo eleifend sed. Fusce finibus pretium elit sit amet porta. Sed tortor nunc, convallis non lorem quis, commodo aliquam ante. Sed eros sapien, euismod quis aliquet in, condimentum at mauris. Sed nulla quam, condimentum vel convallis in, pretium sed orci. Nulla facilisi. Vivamus sed lorem euismod, sodales velit quis, dignissim lectus. Praesent odio arcu, porta maximus scelerisque ac, sodales nec magna. Vestibulum et laoreet est. Aenean quis fermentum mi, eu mollis nisl. Fusce quis sem eu orci elementum iaculis. Cras a erat diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel dui dapibus, laoreet massa ac, semper nisi.',
                    _avatar: ''

                }
            )
        }

    }

    inscription(profil: ProfilModel) {
        this._Profils.push(profil);
        console.log(profil);
    }

}
