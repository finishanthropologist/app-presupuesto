import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso-service';
import { Ingreso } from '../ingreso';

@Component({
  imports: [],
  selector: 'app-ingreso',
  styleUrl: './ingreso.css',
  templateUrl: './ingreso.html',
  host: { 'class': 'col-12 col-md-6' },
})
export class IngresoComponent implements OnInit{
  ingresos: Ingreso[] = [];

  constructor(private ingresoService: IngresoService){}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    let descripcionRegistro = ingreso.descripcion;
    this.ingresoService.eliminar(descripcionRegistro);
  }
}
