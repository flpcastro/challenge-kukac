import { useState } from "react";
import { saveVehicle } from "../../services/ch3-service";
import "./styles.css";


export function Ch3() {
  const [modelo, setModelo] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [portas, setPortas] = useState(0);
  const [marca, setMarca] = useState('');
  const [veiculo, setVeiculo] = useState('Car');


  function handleSave() {
    saveVehicle(modelo, anoFabricacao, portas, marca, veiculo);
  };

  return (
    <div className="ch3-container">
      <label className="ch1-label">Garage</label>

      <div className="ch3-checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={veiculo === "Car" ? true : false}
            onChange={() => setVeiculo("Car")}
          />
          Car
        </label>
        <label>
          <input
            type="checkbox"
            checked={veiculo === "Motorcycle" ? true : false}
            onChange={() => setVeiculo("Motorcycle")}
          />
          Motorcycle
        </label>
      </div>

      <input
        className="ch3-input"
        type="text"
        placeholder="model"
        value={modelo}
        onChange={e => setModelo(e.currentTarget.value)}
      />
      <input
        className="ch3-input"
        type="text"
        placeholder="year of fabrication"
        value={anoFabricacao}
        onChange={e =>
          setAnoFabricacao(e.currentTarget.value)
        }
      />
      <input
        className="ch3-input"
        type="number"
        placeholder="number of doors"
        value={portas || ""}
        onChange={e =>
          setPortas(Number(e.currentTarget.value))
        }
      />
      <input
        className="ch3-input"
        type="text"
        placeholder="brand"
        value={marca}
        onChange={e => setMarca(e.currentTarget.value)}
      />

      <div className="ch3-button" onClick={() => handleSave()}>
        Save
      </div>
    </div>
  )
}