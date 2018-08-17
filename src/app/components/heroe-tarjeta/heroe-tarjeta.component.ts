import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // El heroe y el indice se reciben desde otro componente
  @Input() heroe: any = {};
  @Input() idx: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // inicializamos el emisor
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    // console.log(this.idx);
    // this.router.navigate(['/heroe', this.idx]);
    this.heroeSeleccionado.emit( this.idx );
  }

}
