import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MembreService } from 'src/app/services/MembreService';
import { ActivatedRoute } from '@angular/router';
import { MembreModel } from 'src/app/models/MembreModel';
import { IdeeModel } from 'src/app/models/IdeeModel';
import { IdeeService } from 'src/app/services/IdeeService';
import { MembreModelDTO } from 'src/app/models/MembreModelDTO';
import { Subscription } from 'rxjs';
import { CategorieService } from 'src/app/services/CategorieService';
import { IdeeModelFromDB } from 'src/app/models/IdeeModelDTO';
import { CommentaireComponent } from 'src/app/components/commentaire/commentaire.component';
import { CommentaireService } from 'src/app/services/CommentaireService';
import { CommentaireModel } from 'src/app/models/CommentaireModel';

@Component({
  selector: 'app-page-membre',
  templateUrl: './page-membre.component.html',
  styleUrls: ['./page-membre.component.css']
})
export class PageMembreComponent implements OnInit, OnDestroy {
  id: number;
  membre: MembreModel = null;
  idees: Array<IdeeModel> = [];
  sub: Subscription;
  commentairesOfMembre: Array<CommentaireModel> = [];

  constructor(private route: ActivatedRoute, private membreService: MembreService, private ideeService: IdeeService, private categorieService: CategorieService, private commentService: CommentaireService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['membreId'];
    //this.membre = this.membreService.recupererMembreByIdBouchon(this.id);
    this.commentairesOfMembre.push(this.commentService._comments.find(({ _membre }) => (_membre._id == this.id)));
    this.membre = this.membreService.recupererMembreByIdBouchon(this.id);




    this.sub = this.ideeService.recupererIdeesByPosteur(this.id).subscribe((response: Array<IdeeModelFromDB>) => {
      response.forEach(idee => {
        let ideeMap: IdeeModel;
        ideeMap = {
          id: idee.id,
          titre: idee.titre,
          categorie: this.categorieService.recupererById(idee.categorieId),
          originalPosteur: this.membreService.recupererMembreByIdBouchon(idee.membreId),
          description: idee.description + ' ',
          score: idee.score,
          _image: 'https://picsum.photos/800/400?random=' + idee.id,
          createdAt: new Date(idee.createdAt)
        };
        this.idees.push(ideeMap);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
