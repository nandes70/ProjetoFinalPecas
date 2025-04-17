<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component } from '@angular/core';
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
<<<<<<< HEAD
export class FornecedorCrudComponent implements OnInit{

  //construtor para configurar botao para tela produto
  constructor(private router: Router){ }

  ngOnInit(): void {
      
  }
  //criando interacoes com botoes
  navigateToProductCreate(): void{
    this.router.navigate(['/fornecedor/create'])
  }
=======
export class FornecedorCrudComponent {

>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
}
