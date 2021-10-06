import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Pessoa/listar/listar.component';
import { AdicionarComponent } from './Pessoa/adicionar/adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
