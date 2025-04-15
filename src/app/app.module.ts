import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {NavComponent} from './component/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import {FooterComponent } from './component/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductReadComponent } from './component/product/product-read/product-read.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FornecedorReadComponent } from './component/fornecedor/fornecedor-read/fornecedor-read.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoReadComponent } from './component/forma_pagamento/forma_pagamento-read/forma-pagamento-read.component';
import { FormaPagamentoCreateComponent } from './component/forma_pagamento/forma_pagamento-create/forma-pagamento-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteReadComponent } from './component/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductCrudComponent,
    FornecedorCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    FornecedorReadComponent,
    FornecedorCreateComponent,
    FormaPagamentoCrudComponent,
    FormaPagamentoReadComponent,
    FormaPagamentoCreateComponent,
    ClienteCrudComponent,
    ClienteReadComponent,
    ClienteCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
