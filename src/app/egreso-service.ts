import { Injectable} from '@angular/core';
import { Egreso } from './egreso';

@Injectable({
    providedIn: "root"
})
export class EgresoService{
    public egresos: Egreso[] = [];
    indiceDescripcion: number = 0;

    constructor() {}

    eliminar(descripcion: string) {
        const texto = descripcion.trim();
        this.indiceDescripcion = this.egresos.findIndex(
            (egreso: Egreso) => egreso.descripcion.trim() === texto
        );

        if (this.indiceDescripcion !== -1) {
            this.egresos.splice(this.indiceDescripcion, 1);
        }

    }
}
