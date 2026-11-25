import { Component } from '@angular/core';
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
export class App{
  tiulo = "App Presupuesto";

  constructor(
    private egresoService: EgresoService,
    private ingresoService: IngresoService
  ) {}

  getIngresoTotal(){
    return this.ingresoService.ingresos().reduce(
      (total, ingreso) => total + ingreso.precio,
      0
    );
  }

  getEgresoTotal(){
    return this.egresoService.egresos().reduce(
      (total, egreso) => total + egreso.precio,
      0
    );
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
