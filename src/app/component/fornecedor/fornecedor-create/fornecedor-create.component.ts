import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit{

  fornecedor: Fornecedor = {
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    status: ''
  }

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  criarFornecedor(): void {
    this.fornecedorService.criar(this.fornecedor).subscribe(() => {
      this.fornecedorService.mostrarMensagem('Fornecedor criado com sucesso!');
      this.router.navigate(['/fornecedores']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/fornecedores']);
  }
}

