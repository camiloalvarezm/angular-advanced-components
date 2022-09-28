import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-sin-estado',
  templateUrl: './sin-estado.component.html',
  styleUrls: ['./sin-estado.component.scss']
})
export class SinEstadoComponent implements OnInit {

  @Input() producto: Producto;
  @Output() productoSeleccionado: EventEmitter<Producto> = new EventEmitter();

  private disabled: boolean;
  public accionComprar: string;

  constructor() {
  }

  ngOnInit(): void {
    this.accionComprar = `Comprar por $${this.producto.precio}`;
  }

  comprar():void {
    this.disabled = true;
    this.accionComprar = `Agregado al carrito`;
    this.productoSeleccionado.emit(this.producto);
  }

  isItemDisabled():boolean {
    return this.disabled;
  }

}
