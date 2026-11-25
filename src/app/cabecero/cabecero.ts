import { Component, Input } from '@angular/core';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe, PercentPipe],
  selector: 'app-cabecero',
  styleUrl: './cabecero.css',
  templateUrl: './cabecero.html',
})
export class Cabecero {
  @Input() ingresoTotal: number = 0;
  @Input() egresoTotal: number = 0;
  @Input() porcentajeTotal: number = 0;
  @Input() presupuestoTotal: number = 0;
}
