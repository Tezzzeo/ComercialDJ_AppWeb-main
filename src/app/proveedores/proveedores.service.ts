import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Proveedores } from './proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private url: string = "http://localhost:8090/rest/proveedor"

  constructor(private http: HttpClient) { }

  //Metodo Listar
  getAll():Observable<Proveedores[]> {
    return this.http.get<Proveedores[]>(this.url + '/listar')
  }

  //Metodo Crear
  create(proveedor: Proveedores): Observable<Proveedores> {
    return this.http.post<any>(this.url + '/agregar', proveedor);
  }
  
  //Metodo Buscar
  get(ruc:string):Observable<Proveedores> {
    return this.http.get<Proveedores>(this.url + '/buscar/' + ruc)
  }

  //Metodo Actualizar
  update(proveedor:Proveedores):Observable<Proveedores> {
    return this.http.put<any>(this.url + '/editar/' + proveedor.ruc, proveedor);
  }

  //Metodo Eliminar
  delete(ruc:string):Observable<Proveedores> {
    return this.http.delete<Proveedores>(this.url + '/borrar/' + ruc)
  }

}
