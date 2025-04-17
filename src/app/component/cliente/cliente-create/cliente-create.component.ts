<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
=======
import { Component } from '@angular/core';
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
<<<<<<< HEAD
export class ClienteCreateComponent implements OnInit{
cliente: Cliente = {
  nome: '',
  cpfCnpj: '',
  dataNascimento: '',
  formaPagamento: '',
  status: ''
}
constructor(private clienteService: ClienteService,
  private router: Router) { }

ngOnInit(): void {
    
}
createCliente(): void
{
  this.clienteService.create(this.cliente).subscribe(() => {
    this.clienteService.showMessage('Cliente Criado!!!')
    this.router.navigate(['/cliente'])
  })
}
cancel(): void
{
  this.router.navigate(['/cliente'])
}
}
=======
export class ClienteCreateComponent {

}
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
