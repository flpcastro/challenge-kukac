import axios from "axios";
import { Carro } from "../classes/Carro";
import { Moto } from "../classes/Moto";

export const saveVehicle = async (
  modelo: string,
  anoFabricacao: string,
  portas: number,
  marca: string,
  veiculo: string,
) => {
  if (veiculo === "Carro") {
    const vehicle: Carro = new Carro(
      modelo,
      anoFabricacao,
      portas,
      marca,
      veiculo,
    );

    try {
      const response = await axios.post(
        `http://localhost:3333/challenges/saveVehicle`,
        vehicle
      );
      console.log(response);
    } catch (error) {
      console.log("saveVehicle error", error);
    }
  } else {
    const vehicle: Moto = new Moto(
      modelo,
      anoFabricacao,
      portas,
      marca,
      veiculo,
    );

    try {
      const response = await axios.post(
        `http://localhost:3333/challenges/saveVehicle`,
        vehicle
      );
    } catch (error) {
      console.log("saveVehicle errorrr", error);
    }
  }
};