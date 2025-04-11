import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formapagamento-crud',
  templateUrl: './formapagamento-crud.component.html',
  styleUrls: ['./formapagamento-crud.component.css']
})
export class FormapagamentoCrudComponent implements OnInit{

  //construtor para configurar botao para tela produto
  constructor(private router: Router){ }

  ngOnInit(): void {
      
  }
  //criando interacoes com botoes
  navigateToProductCreate(): void{
    this.router.navigate(['/formapagamento/create'])
  }
}
