import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Formapagamento } from './formapagamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormapagamentoService {

  baseUrl = "http://localhost:3001/formapagamento"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X",{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Formapagamento): Observable<Formapagamento>{
    return this.http.post<Formapagamento>(this.baseUrl, product)
  }

  read(): Observable<Formapagamento[]>{
    return this.http.get<Formapagamento[]>(this.baseUrl)
  }

  readById(id: string): Observable<Formapagamento>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Formapagamento>(url)
  }

  update(product: Formapagamento): Observable<Formapagamento>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Formapagamento>(url, product)
  }

  delete(id: number): Observable<Formapagamento>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Formapagamento>(url)
  }
}
