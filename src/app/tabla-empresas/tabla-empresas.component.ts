import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tabla-empresas',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './tabla-empresas.component.html',
  styleUrl: './tabla-empresas.component.css'
})
export class TablaEmpresasComponent implements OnInit{
  jsonData: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.jsonData = data;
    });
  }
}
