import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso-service';
import { EgresoService } from '../egreso-service';

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
      this.ingresoService.agregar(this.descripcionInput, this.precioInput);
    }
    else if(this.tipo === "egresoOperacion"){
      this.egresoService.agregar(this.descripcionInput, this.precioInput);
    }

    this.descripcionInput = "";
    this.precioInput = 0;
  }
}
