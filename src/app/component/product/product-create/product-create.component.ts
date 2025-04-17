import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
=======
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
<<<<<<< HEAD
export class ProductCreateComponent implements OnInit{

product: Product = {
=======
export class ProductCreateComponent implements OnInit {
  product: Product = {
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
    name: '',
    price: 0
  }

  //importando productService
  constructor(private productService: ProductService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
<<<<<<< HEAD
      this.productService.showMessage('Produto Criado!!!')
=======
      this.productService.showMensage('Produto criado!')
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
<<<<<<< HEAD
}  
=======

}
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
