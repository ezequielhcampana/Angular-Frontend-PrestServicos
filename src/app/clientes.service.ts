import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl: string = environment.apiUrlBase + '/api/clientes';

  constructor( private http: HttpClient ) {}

  salvar( cliente: Cliente ): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}`, cliente);
  }

  atualizar( cliente: Cliente ): Observable<any> {
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}`);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${cliente.id}`);
  } 

/*   getClientes(): Cliente[] {

    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Ezequiel H Campana';
    cliente.cpf = '15622340802';
    cliente.dataCadastro = '12/01/2021';

    return [cliente];
  } */
}
