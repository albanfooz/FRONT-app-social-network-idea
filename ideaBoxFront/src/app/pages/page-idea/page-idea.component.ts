import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeeService } from 'src/app/services/IdeeService';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { Subscription } from 'rxjs';
import { IdeeModelFromDB } from 'src/app/models/IdeeModelDTO';

@Component({
  selector: 'app-page-idea',
  templateUrl: './page-idea.component.html',
  styleUrls: ['./page-idea.component.css']
})
export class PageIdeaComponent implements OnInit, OnDestroy {

  id: number;
  idee: IdeeModel = null;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private ideeService: IdeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['ideaId'];
    this.sub = this.ideeService.recupererById(this.id).subscribe((response: IdeeModelFromDB) => {
      console.log(response);

      this.idee = {
        id: response.id,
        titre: response.titre,
        categorie: { _id: response.categorieId, _categorie: 'TODO', _icone: 'computer' },
        originalPosteur: { _id: response.membreId, _pseudo: 'temp' },
        description: response.description + ' ',
        score: response.score,
        _image: 'https://picsum.photos/800/400?random=' + response.id,
        createdAt: new Date(response.createdAt)
      };
    });


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
