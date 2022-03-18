import { Veiculo } from './../../Model/veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private readonly API = 'veiculos';

  constructor( private httpClient: HttpClient ) { }

  getAll() {
    return this.httpClient.get<Veiculo[]>(this.API);
  }
}
