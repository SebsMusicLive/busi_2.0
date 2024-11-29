import { Component, OnInit } from '@angular/core';
import { TablaEmpresasComponent } from "../tabla-empresas/tabla-empresas.component";
import { GraficaComponent } from "../grafica/grafica.component";
@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [TablaEmpresasComponent, GraficaComponent],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {
  

}
