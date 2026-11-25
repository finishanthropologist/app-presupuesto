import { Component } from '@angular/core';
import { EgresoService } from '../egreso-service';
import { Egreso } from '../egreso';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-egreso',
  styleUrl: './egreso.css',
  templateUrl: './egreso.html',
  host: { 'class': 'col-12 col-md-6' },
})
export class EgresoComponent {
  readonly egresos;
  
    constructor(private egresoService: EgresoService){
      this.egresos = this.egresoService.egresos;
    }
  
    eliminarRegistro(egreso: Egreso){
      let descripcionRegistro = egreso.descripcion;
      this.egresoService.eliminar(descripcionRegistro);
    }
}
