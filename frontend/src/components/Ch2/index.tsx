import { useState } from "react";
import { ChangeAnswer } from "../../interfaces/ChangeAnswer";
import { calculateChange } from "../../services/ch2-service";
import _ from "lodash";

import "./styles.css";

interface ch02State {
  changeResponse: ChangeAnswer;
}

export function Ch2() {
  const [buyValue, setBuyValue] = useState('');
  const [deliveredValue, setDeliveredValue] = useState('');
  const [changeResponse, setChangeResponse] = useState<ChangeAnswer>({} as ChangeAnswer);

  function handleCalculate() {
    if (Number(buyValue) < Number(deliveredValue)) {
      calculateChange(buyValue, deliveredValue)
        .then((res: any) => setChangeResponse(res))
        .catch((err: any) => setChangeResponse(err));
    }
  }


  return (
    <div className="ch2-container">
        <label className="ch2-label">Checkout</label>

        <input
          className="ch2-input"
          type="number"
          placeholder="purchase value"
          value={buyValue}
          onChange={e => setBuyValue(e.currentTarget.value)}
        />
        <input
          className="ch2-input"
          type="number"
          placeholder="amount paid"
          value={deliveredValue}
          onChange={e =>
            setDeliveredValue(e.currentTarget.value)
          }
        />

        <div className="ch2-button" onClick={() => handleCalculate()}>
          Calculate
        </div>

        {_.size(changeResponse) > 0 && (
          <div className="ch2-cr-container">
            <div className="ch2-cr-header">
              <label>
                Purchase Value:{" "}
                <span className="ch2-cr-value">R$ {buyValue}</span>
              </label>
              <label>
                Change Value:{" "}
                <span className="ch2-cr-value">R$ {changeResponse.change}</span>
              </label>
              <label>
                Minimum Number of Notes{" "}
                <span className="ch2-cr-value">{changeResponse.minNotes}</span>
              </label>
            </div>

            <div className="ch2-cr-body">
              <div className="ch2-cr-note-container">
                <label>{changeResponse.counter100} notes of: 100</label>
              </div>
              <div className="ch2-cr-note-container">
                <label>{changeResponse.counter10} notes of: 10</label>
              </div>
              <div className="ch2-cr-note-container">
                <label>{changeResponse.counter1} notes of: 1</label>
              </div>
            </div>
          </div>
        )}
      </div>
  )
}