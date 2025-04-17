import { Component } from '@angular/core';
<<<<<<< HEAD
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
=======
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent {

<<<<<<< HEAD
  fornecedor!: Fornecedor[]
    displayedColumns = ['id', 'nameFantasia', 'razao_Social', 'cpfCnpj', 'status', 'action']
 
    constructor(private fornecedorService: FornecedorService) { }
 
    ngOnInit(): void {
      this.fornecedorService.read().subscribe(fornecedor => {
        this.fornecedor = fornecedor
        console.log(fornecedor)  
      })
    
}
=======
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
}
