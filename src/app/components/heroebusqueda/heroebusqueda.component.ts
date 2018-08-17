import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroebusqueda',
  templateUrl: './heroebusqueda.component.html'
})
export class HeroebusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  constructor(private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log("Termino: "+ params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      // console.log("lista filtrada: "+ this.heroes);
    });
  }

  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
