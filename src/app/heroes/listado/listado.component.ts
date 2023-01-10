import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[]=['Spiderman','IronMan','Thor','Hulk','Hawkeye','Vision'];
  heroeBorrado:string='';
  borrarHeroe():void{
    console.log('Borrando..');
    //this.heroes.splice(0,1);
    this.heroeBorrado= this.heroes.shift()||'';
    console.log(this.heroeBorrado);
  }
}
