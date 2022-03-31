import { Veiculo } from "../interfaces/Veiculo";

export class Moto implements Veiculo {
  modelo: string;
  anoFabricacao: string;
  portas: number;
  marca: string;
  veiculo: string;


  constructor(
    modelo: string,
    anoFabricacao: string,
    portas: number,
    marca: string,
    veiculo: string,
  ) {
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.portas = portas;
    this.marca = marca;
    this.veiculo = veiculo;
  }
}