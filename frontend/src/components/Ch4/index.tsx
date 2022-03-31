import { useState } from "react";
import { getCeps } from "../../services/ch4-service";
import _ from "lodash";

import Arrow from "../../img/arrow.svg";
import "./styles.css";


export function Ch4() {
  const [cep1, setCep1] = useState('');
  const [cep2, setCep2] = useState('');
  const [cep3, setCep3] = useState('');
  const [cep4, setCep4] = useState('');
  const [cep5, setCep5] = useState('');
  const [ceps, setCeps] = useState<any>('');
  const [results, setResults] = useState(false);


  async function handleSearch() {
    await getCeps(cep1, cep2, cep3, cep4, cep5)
      .then((res: any[]) => setCeps(res))
      .catch((r: any[]) => setCeps(r));

      setResults(true);
  };


  return (
    <div className="ch4-container">
        {results ? (
          <div>
            <div>
              <img
                className="cursor"
                src={Arrow}
                alt="Voltar"
                height={38}
                onClick={() => setResults(false)}
              />
            </div>

            <div className="ch4-cep-result-container">
              {ceps.map((resultCep: any, resultCep1: any) => {
                if (_.size(resultCep) === 1) {
                  return (
                    <div className="ch4-cep-result">
                      <label>Invalid Zip Code</label>
                    </div>
                  );
                }

                return (
                  <div key={resultCep1} className="ch4-cep-result">
                    <label>{resultCep.cep}</label>
                    <label>Street: {resultCep.logradouro}</label>
                    <label>District: {resultCep.bairro}</label>
                    <label>City: {resultCep.localidade}</label>
                    <label>State: {resultCep.uf}</label>
                    <label>IBGE: {resultCep.ibge}</label>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <>
            <label className="ch4-label">Zip Code</label>
            <div className="ch4-sub-label">Enter The Zip Code:</div>

            <input
              className="ch4-input"
              type="text"
              placeholder="Zip Code 1"
              value={cep1}
              onChange={e => setCep1(e.currentTarget.value)}
            />
            <input
              className="ch4-input"
              type="text"
              placeholder="Zip Code 2"
              value={cep2}
              onChange={e => setCep2(e.currentTarget.value)}
            />
            <input
              className="ch4-input"
              type="text"
              placeholder="Zip Code 3"
              value={cep3}
              onChange={e => setCep3(e.currentTarget.value)}
            />
            <input
              className="ch4-input"
              type="text"
              placeholder="Zip Code 4"
              value={cep4}
              onChange={e => setCep4(e.currentTarget.value)}
            />
            <input
              className="ch4-input"
              type="text"
              placeholder="Zip Code 5"
              value={cep5}
              onChange={e => setCep5(e.currentTarget.value)}
            />

            <div className="ch4-button" onClick={() => handleSearch()}>
              Search
            </div>
          </>
        )}
      </div>
  )
}