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
    return this.httpClient.get<Veiculo[]>(this.API);/* [{
      "id": 1,
      "marca": "HONDA",
      "veiculo": "jetta",
      "ano": 2015,
      "descricao": "balblablablblal"
    },
    {
      "id": 2,
      "marca": "FIAT",
      "veiculo": "jetta",
      "ano": 2020,
      "descricao": "balblablablblal"
    },
    {
      "id": 3,
      "marca": "KIA",
      "veiculo": "jetta",
      "ano": 2008,
      "descricao": "balblablablblal"
    },
    {
      "id": 4,
      "marca": "TOYOTA",
      "veiculo": "jetta",
      "ano": 1999,
      "descricao": "balblablablblal"
    },
    {
      "id": 5,
      "marca": "CHEVROLET",
      "veiculo": "jetta",
      "ano": 2003,
      "descricao": "balblablablblal"
    },
    {
      "id": 6,
      "marca": "RENAULT",
      "veiculo": "jetta",
      "ano": 2022,
      "descricao": "balblablablblal"
    }] */
  }
}
