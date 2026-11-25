import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso-service';
import { EgresoService } from '../egreso-service';
import { Ingreso } from '../ingreso';
import { Egreso } from '../egreso';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  constructor(
    private egresoService: EgresoService,
    private ingresoService: IngresoService
  ){}

  tipo: string = "ingresoOperacion";
  descripcionInput: string = "";
  precioInput: number = 0;

  tipoOperacion(evento: Event){
    this.tipo = (evento.target as HTMLSelectElement).value;
  }

  agregarValor(): void{
    if(this.tipo === "ingresoOperacion"){
      let nuevoIngreso = new Ingreso(this.descripcionInput, this.precioInput)
      this.ingresoService.ingresos.push(nuevoIngreso);
    }
    else if(this.tipo === "egresoOperacion"){
      let nuevoEgreso = new Egreso(this.descripcionInput, this.precioInput)
      this.egresoService.egresos.push(nuevoEgreso);
    }

    this.descripcionInput = "";
    this.precioInput = 0;
  }
}
