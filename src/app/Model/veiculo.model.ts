

export class Veiculo {
  id?: number;
  veiculo?: string;
  marca?: string;
  ano?: number;
  descricao?: string;
  vendido?: boolean;
  created?: string;
  updated?: string;

  constructor(id: number, veiculo: string, ano: number, marca: string, descricao: string, vendido: boolean, created: string, updated: string) {
    this.id = id;
    this.veiculo = veiculo;
    this.ano = ano;
    this.marca = marca;
    this.descricao = descricao;
    this.vendido = vendido;
    this.created = created;
    this.updated = updated;
  }

}
