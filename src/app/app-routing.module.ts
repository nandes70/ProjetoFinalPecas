import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
<<<<<<< HEAD
import { FormapagamentoCrudComponent } from './views/formapagamento-crud/formapagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
=======
>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36

const routes: Routes = [
{
  path: "",
<<<<<<< HEAD
  component: HomeComponent
},

///////////////////////////products
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent

},
///////////////////////////products FIM

///////////////////////////formaPagamento
{
  path: "formaPagamento",
  component: FormapagamentoCrudComponent
},
/*{
  path: "formaPagamento/create",
  component: FormaPagamentoCreateComponent
},*/
///////////////////////////formaPagamento FIM

///////////////////////////fornecedores
{
  path: "fornecedores",
  component: FornecedorCrudComponent
},
/*{
  path: "fornecedores/create",
  component: FornecedorCreateComponent
},*/
///////////////////////////fornecedores FIM

///////////////////////////Cliente
{
  path: "cliente",
  component: ClienteCrudComponent
},
{
  path: "cliente/create",
  component: ClienteCreateComponent
},
///////////////////////////Cliente FIM
];



=======
  component : HomeComponent
},

{
  path: "products",
  component : ProductCrudComponent
},

{
  component : ProductCrudComponent
},



];

>>>>>>> e7047ada851a80e54323e6fb3a819a2186c27d36
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
