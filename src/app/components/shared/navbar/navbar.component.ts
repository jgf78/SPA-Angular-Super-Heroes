import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService,
    private router: Router) { }

  ngOnInit() {
 
  }

  buscarHeroe(termino: string) {
    // console.log("en el navbar: "+ termino);
    this.router.navigate(['/heroeBusqueda', termino] );
  }
}
