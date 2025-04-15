import { Injectable } from '@angular/core';
import { Fornecedor } from './endereco.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl = 'http://localhost:3001/fornecedor';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  criar(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.baseUrl, fornecedor);
  }

  listar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl);
  }

  buscarPorId(id: number): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Fornecedor>(url);
  }

  atualizar(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${fornecedor.id}`;
    return this.http.put<Fornecedor>(url, fornecedor);
  }

  deletar(id: number): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Fornecedor>(url);
  }
}