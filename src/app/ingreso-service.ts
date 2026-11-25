import { Injectable} from '@angular/core';
import { Ingreso } from './ingreso';

@Injectable({
    providedIn: "root"
})
export class IngresoService{

     public ingresos: Ingreso[] = [new Ingreso("salario", 1000), new Ingreso("venta Carro", 400)];
        indiceDescripcion: number = 0;
    
        constructor() {}
    
        eliminar(descripcion: string) {
            const texto = descripcion.trim();
            this.indiceDescripcion = this.ingresos.findIndex(
                (ingreso: Ingreso) => ingreso.descripcion.trim() === texto
            );
    
            if (this.indiceDescripcion !== -1) {
                this.ingresos.splice(this.indiceDescripcion, 1);
            }
    
        }
}
