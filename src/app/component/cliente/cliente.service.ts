import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:3001/cliente"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X",{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, product)
  }

  read(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  readById(id: string): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }

  update(product: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Cliente>(url, product)
  }

  delete(id: number): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }
}
