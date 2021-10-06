import { Injectable } from '@angular/core';
import { Pessoa } from '../Entity/Pessoa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/pessoa";

  getPessoa(){
    return this.http.get<Pessoa[]>(this.url);
  }
}
