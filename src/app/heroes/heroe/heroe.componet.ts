import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";

@Component({
selector: 'app-heroe', 
templateUrl: 'heroe.component.html'

})
export class HeroeComponent{
 nombre: string = 'Ironman';
 edad: number = 45;

 get nombreCapitalizado(): string {

    return this.nombre.toUpperCase();
 }


 obteneNombre(): string{

    return `${this.nombre} - ${this.edad}`;
 }

 cambiarNombre():void{
    this.nombre = 'spiderman';

 }
}