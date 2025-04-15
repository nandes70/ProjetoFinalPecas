import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'http://localhost:3001/cliente';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  buscarPorId(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  deletar(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cliente>(url);
  }
}