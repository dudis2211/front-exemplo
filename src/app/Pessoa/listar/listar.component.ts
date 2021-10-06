import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/Entity/Pessoa';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html'
})
export class ListarComponent implements OnInit {

  listaPessoa: Pessoa[] | undefined;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPessoa()
      .subscribe(data => {
        this.listaPessoa = data;
      })


  }

}
