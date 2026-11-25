import { Injectable, signal } from '@angular/core';
import { Ingreso } from './ingreso';

@Injectable({
    providedIn: "root"
})
export class IngresoService{
    private readonly ingresosState = signal<Ingreso[]>([
        new Ingreso("salario", 1000),
        new Ingreso("venta Carro", 400)
    ]);
    readonly ingresos = this.ingresosState.asReadonly();
    
        constructor() {}

        agregar(descripcion: string, precio: number) {
            this.ingresosState.update(ingresos =>
                [...ingresos, new Ingreso(descripcion, precio)]
            );
        }
    
        eliminar(descripcion: string) {
            const texto = descripcion.trim();
            this.ingresosState.update(ingresos =>
                ingresos.filter(ingreso => ingreso.descripcion.trim() !== texto)
            );
        }
}
