import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Egreso } from './egreso';
import { Ingreso } from './ingreso';
import { EgresoService } from './egreso-service';
import { IngresoService } from './ingreso-service';
import { Cabecero } from './cabecero/cabecero';
import { Formulario } from './formulario/formulario';
import { IngresoComponent } from './ingreso/ingreso';
import { EgresoComponent } from './egreso/egreso';

@Component({
  imports: [Cabecero, Formulario, IngresoComponent, EgresoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  tiulo = "App Presupuesto";
  

  egresos: Egreso[] = [];
  ingresos: Ingreso[] = [];

  constructor(
    private egresoService: EgresoService,
    private ingresoService: IngresoService
  ) {}

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
    this.ingresos = this.ingresoService.ingresos;
  }

  getIngresoTotal(){
    let totalIngreso = 0;
    for(let ingreso of this.ingresos){
      totalIngreso += ingreso.precio;
    }
    return totalIngreso;
  }

  getEgresoTotal(){
    let totalEgreso = 0;
    for(let egreso of this.egresos){
      totalEgreso += egreso.precio;
    }
    return totalEgreso;
  }

  getPorcentajeTotal(){
    let totalIngreso = this.getIngresoTotal();
    let totalEgreso = this.getEgresoTotal();
    return totalIngreso === 0 ? 0 : totalEgreso / totalIngreso;
  }

  getTotalPresupuesto() {
    let totalIngreso = this.getIngresoTotal();
    let totalEgreso = this.getEgresoTotal();
    let presupuestoTotal = totalIngreso - totalEgreso;
    return presupuestoTotal;
  }
}
