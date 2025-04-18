import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contato } from './contato.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  baseUrl = "http://localhost:3001/contato"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X",{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Contato): Observable<Contato>{
    return this.http.post<Contato>(this.baseUrl, product)
  }

  read(): Observable<Contato[]>{
    return this.http.get<Contato[]>(this.baseUrl)
  }

  readById(id: string): Observable<Contato>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Contato>(url)
  }

  update(product: Contato): Observable<Contato>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Contato>(url, product)
  }

  delete(id: number): Observable<Contato>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Contato>(url)
  }
}
