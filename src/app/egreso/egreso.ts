import { Component } from '@angular/core';
import { EgresoService } from '../egreso-service';
import { Egreso } from '../egreso';

@Component({
  imports: [],
  selector: 'app-egreso',
  styleUrl: './egreso.css',
  templateUrl: './egreso.html',
  host: { 'class': 'col-12 col-md-6' },
})
export class EgresoComponent {
  egresos: Egreso[] = [];
  
    constructor(private egresoService: EgresoService){}
  
    ngOnInit(): void {
      this.egresos = this.egresoService.egresos;
    }
  
    eliminarRegistro(ingreso: Egreso){
      let descripcionRegistro = ingreso.descripcion;
      this.egresoService.eliminar(descripcionRegistro);
    }
}
