import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './Pessoa/adicionar/adicionar.component';
import { ListarComponent } from './Pessoa/listar/listar.component';

const routes: Routes = [
    {path: 'listar', component: ListarComponent},
    {path: 'adicionar', component: AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
