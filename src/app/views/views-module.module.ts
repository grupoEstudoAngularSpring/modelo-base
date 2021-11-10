import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { HomeComponent } from './home/home.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from '../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '../components/button/button.component';
import { TitleComponent } from '../components/title/title.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TemplateModule } from '../components/template.module';

@NgModule({
  declarations: [
    HomeComponent,
    ClienteComponent,
    ClienteFormComponent,
    FornecedorComponent,
    FornecedorFormComponent,
    ButtonComponent,
    TitleComponent,
    LoginComponent,
    LayoutComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TemplateModule

  ],
  exports: [
    HomeComponent,
    ClienteComponent,
    ClienteFormComponent,
    FornecedorComponent,
    FornecedorFormComponent

  ],
  providers: [
    ClienteService
  ],
})
export class ViewsModuleModule { }
