import { Component } from '@angular/core';
<<<<<<< HEAD
import { Product } from '../product.model';
import { ProductService } from '../product.service';
=======
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {

<<<<<<< HEAD
  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)  
    })
  }
=======
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
}
