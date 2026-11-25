import { Component } from '@angular/core';
import { IngresoService } from '../ingreso-service';
import { Ingreso } from '../ingreso';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-ingreso',
  styleUrl: './ingreso.css',
  templateUrl: './ingreso.html',
  host: { 'class': 'col-12 col-md-6' },
})
export class IngresoComponent {
  readonly ingresos;

  constructor(private ingresoService: IngresoService){
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    let descripcionRegistro = ingreso.descripcion;
    this.ingresoService.eliminar(descripcionRegistro);
  }
}
