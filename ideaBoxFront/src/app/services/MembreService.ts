import { Injectable } from '@angular/core';
import { MembreModel } from '../models/MembreModel';

@Injectable({
  providedIn: 'root'
})
export class MembreService {
  devs: Array<MembreModel> = [
    {
      _id: 1,
      _pseudo: 'SorbetCitron_dev',
      _profilePic: 'https://cdn.discordapp.com/avatars/406834409757605888/da4491a0cd84d5f3464c30a24c63667d.png?size=256'
    },
    {
      _id: 2,
      _pseudo: 'Shynaen_dev',
      _profilePic: 'https://static-cdn.jtvnw.net/jtv_user_pictures/18ebc1ba-f0ac-475c-9768-b86e78530395-profile_image-70x70.png'
    },
    {
      _id: 3,
      _pseudo: 'alban_fooz_dev',
      _profilePic: 'https://secure.download.dm.origin.com/production/avatar/prod/userAvatar/18048778/416x416.JPEG'
    },
    {
      _id: 4,
      _pseudo: 'luc_dev',
      _profilePic: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p100x100/11954818_168148033518696_8945614144384326149_n.jpg?_nc_cat=110&_nc_oc=AQm-6yqfIlyxgimTdBmOgaj0oDJ_viOqi0_-01INWi4qU2iRttt8WcABIOgakXePK5U&_nc_ht=scontent-cdg2-1.xx&oh=6b87eb04ad252d77314ffd83c845c15f&oe=5E8A1CE7'
    }
  ];
  membres: Array<MembreModel> = this.devs;
  constructor() {
    for (let index = 5; index < 15; index++) {
      this.membres.push(
        {
          _id: index,
          _pseudo: 'fakeMembre' + index,
          _profilePic: 'https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png'
        }
      );
    }
  }

  recupererMembreById(id: number) {
    return this.membres.find(({ _id }) => _id == id);
  }

}
