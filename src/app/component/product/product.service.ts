import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

<<<<<<< HEAD
  baseUrl = "http://localhost:3001/products"
=======
  baseUrl = 'htt//localhost:3001/products'
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

<<<<<<< HEAD
  showMessage(msg: string): void {
    this.snackBar.open(msg, "X",{
=======
  showMensage(msg: string): void {
    this.snackBar.open(msg, 'X',{
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

<<<<<<< HEAD
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }
  
=======
  read(): Observable<Product>{
    return this.http.get<Product>(this.baseUrl)
  }

  readById(id: string): Observable<Product>{
    const url = '${this.baseUrl}/${id}'
    return this.http.get<Product>(url)
  }
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
}
