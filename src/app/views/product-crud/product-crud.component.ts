import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
<<<<<<< HEAD
export class ProductCrudComponent implements OnInit{

  //construtor para configurar botao para tela produto
  constructor(private router: Router){ }

  ngOnInit(): void {
      
  }
  //criando interacoes com botoes
  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
=======
export class ProductCrudComponent implements OnInit {
  //construtor para configurar o botão para tela de produto
  constructor(private router: Router) {}

  ngOnInit(): void{

  }

  //criando intercepção com botões
  navigateToProductCreate(): void{
    this.router.navigate(['products/create'])
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
  }

}
