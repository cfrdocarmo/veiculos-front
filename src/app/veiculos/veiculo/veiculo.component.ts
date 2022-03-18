import { Observable } from 'rxjs';
import { Veiculo } from './../../Model/veiculo.model';
import { VeiculoService } from './../../services/VeiculoService/veiculo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  veiculos: Observable<Veiculo[]>

  displayedColumns: string[] = [ 'id', 'marca', 'veiculo', 'ano', 'descricao' ];

 // veiculoService: VeiculoService;

  constructor( private veiculoService: VeiculoService ) {

    //this.veiculoService = new VeiculoService();
    //this.veiculos = this.veiculoService.getAll();
    this.veiculos = this.veiculoService.getAll();


   }

  ngOnInit(): void {
  }


}
