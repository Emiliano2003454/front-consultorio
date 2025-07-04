import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

   private baseUrl = "http://localhost:8080";

   constructor(private http: HttpClient) { }

  guardarDoctor(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crearDoctor`,data);
  }
  buscarDoctor(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscarDoctor`,data);
  }
  actualizarDoctor(data : any,id : number): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizarDoctor/${id}`,data);
  }
  eliminarDoctor(id : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminarDoctor/${id}`);
  }
}
