import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit{

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
      private _heroesService: HeroesService,
      private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      //console.log("ID Heroe: "+ params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      //console.log(this.heroe);
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log("ID Heroe Filtrado: "+ params['id']);
      this.heroe = this._heroesService.getHeroeFiltrado(params['id']);
      //console.log(this.heroe);
    });
  }

  volverListaHeroes() {
    this.router.navigate(['/heroes']);
    this._heroesService.heroesArr = [];
  }
}
