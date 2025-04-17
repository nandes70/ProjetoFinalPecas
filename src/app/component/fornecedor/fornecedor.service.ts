<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fornecedor } from './fornecedor.model';
import { Observable } from 'rxjs';
=======
import { Injectable } from '@angular/core';
import { Fornecedor } from './fornecedor.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

<<<<<<< HEAD
  baseUrl = "http://localhost:3001/fornecedor"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X",{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(this.baseUrl, product)
  }

  read(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.baseUrl)
  }

  readById(id: string): Observable<Fornecedor>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Fornecedor>(url)
  }

  update(product: Fornecedor): Observable<Fornecedor>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Fornecedor>(url, product)
  }

  delete(id: number): Observable<Fornecedor>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Fornecedor>(url)
  }
}
=======
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
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
