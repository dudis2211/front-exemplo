import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-exemplo';

  constructor(private router: Router){

  }

  adicionarPessoa(){
    this.router.navigate(["adicionar"]);
  }

  getPessoa(){
    this.router.navigate(["listar"]);
  }
}
