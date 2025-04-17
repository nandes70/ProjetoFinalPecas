import { Component, OnInit } from '@angular/core';
import { FormapagamentoService } from '../formapagamento.service';
import { Formapagamento } from '../formapagamento.model';

@Component({
  selector: 'app-formapagamento-read',
  templateUrl: './formapagamento-read.component.html',
  styleUrls: ['./formapagamento-read.component.css']
})
export class FormapagamentoReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tipo', 'descricao', 'action'];
  formasPagamento: Formapagamento[] = [];

  constructor(private formaPagamentoService: FormapagamentoService) {}

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe((dados) => {
      this.formasPagamento = dados;
    });
  }
}