import { Injectable, signal } from '@angular/core';
import { Egreso } from './egreso';

@Injectable({
    providedIn: "root"
})
export class EgresoService{
    private readonly egresosState = signal<Egreso[]>([
        new Egreso("Colegiaturas", 200),
        new Egreso("Viveres", 75)
    ]);
    readonly egresos = this.egresosState.asReadonly();

    constructor() {}

    agregar(descripcion: string, precio: number) {
        this.egresosState.update(egresos =>
            [...egresos, new Egreso(descripcion, precio)]
        );
    }

    eliminar(descripcion: string) {
        const texto = descripcion.trim();
        this.egresosState.update(egresos =>
            egresos.filter(egreso => egreso.descripcion.trim() !== texto)
        );
    }
}
