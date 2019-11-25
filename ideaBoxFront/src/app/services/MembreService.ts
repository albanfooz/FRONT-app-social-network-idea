import { Injectable } from '@angular/core';
import { MembreModel } from '../models/MembreModel';
import { HttpClient } from '@angular/common/http';
import { MembreModelDTO } from '../models/MembreModelDTO';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  private URL = 'http://localhost:7000/profils';
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
      _profilePic: 'https://toppng.com/public/uploads/preview/anther-clipart-perry-black-panther-11562894629dczjoe2rmr.png'
    }
  ];
  membres: Array<MembreModel> = [];//= this.devs;
  membresDTO: Array<MembreModelDTO> = [];
  constructor(private http: HttpClient) {
    //should return a obs in method
    //use the obs in component,
    //ngif tab.length != 0;
    /* const obs = this.http.get(this.URL);
     obs.subscribe((reponse) => {
       this.membresDTO = reponse as Array<MembreModelDTO>;
       this.membresDTO.forEach(element => {
         this.membres.push(
           {
             _id: element.id,
             _pseudo: element.login
           }
         );
       });
 
 
     });
     console.log(this.membres);*/
  }

  recupererMembreByIdBouchon(id: number) {
    return this.membres.find(({ _id }) => _id == id);
  }
  recupererMembreById(id: number) {
    return this.http.get(this.URL + '/p' + id);
  }
  recupererAllMembres() { //useless
    return this.http.get(this.URL);
  }

}
