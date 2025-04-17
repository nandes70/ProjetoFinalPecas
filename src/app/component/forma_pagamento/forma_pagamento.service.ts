import { Injectable } from '@angular/core';
import { Forma_pagamento } from './forma_pagamento.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  baseUrl = 'http://localhost:3001/formas_pagamento';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  criar(formaPagamento: Forma_pagamento): Observable<Forma_pagamento> {
    return this.http.post<Forma_pagamento>(this.baseUrl, formaPagamento);
  }

  listar(): Observable<Forma_pagamento[]> {
    return this.http.get<Forma_pagamento[]>(this.baseUrl);
  }

  buscarPorId(id: number): Observable<Forma_pagamento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Forma_pagamento>(url);
  }

  atualizar(formaPagamento: Forma_pagamento): Observable<Forma_pagamento> {
    const url = `${this.baseUrl}/${formaPagamento.id}`;
    return this.http.put<Forma_pagamento>(url, formaPagamento);
  }

  deletar(id: number): Observable<Forma_pagamento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Forma_pagamento>(url);
  }
}