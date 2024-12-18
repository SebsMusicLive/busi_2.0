import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/bd.json'; //ruta del JSON


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.jsonUrl); //Retorna el observable con los datos
  }
}
