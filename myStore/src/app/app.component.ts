import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProductosComponent, BarraSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrito-angular';
}
