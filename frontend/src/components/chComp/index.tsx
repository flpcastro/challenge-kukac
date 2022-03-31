import { useState } from "react";

import { Ch1 } from "../Ch1";
import { Ch2 } from "../Ch2";
import { Ch3 } from "../Ch3";
import { Ch4 } from "../Ch4";

import "./styles.css";

interface chCompState {
  currentCh: number;
}


export function ChComp() {
  const [state, setState] = useState<chCompState | any>({
    currentCh: 1
  });

  function showChallenge() {
    const { currentCh } = state;

    switch (currentCh) {
      case 1:
        return <Ch1 />;
      case 2:
        return <Ch2 />;
      case 3:
        return <Ch3 />;
      case 4:
        return <Ch4 />;
      default:
        return <> </>;
    }
  };

  return (
    <>
      <div className="cc-container">
        <div
          className="cc-card"
          onClick={() => setState({ currentCh: 1 })}
        >
          <span>Challenge</span>
          <span className="number">01</span>

          <label>Palindrome</label>
        </div>
        <div
          className="cc-card"
          onClick={() => setState({ currentCh: 2 })}
        >
          <span>Challenge</span>
          <span className="number">02</span>

          <label>Checkout</label>
        </div>
        <div
          className="cc-card"
          onClick={() => setState({ currentCh: 3 })}
        >
          <span>Challenge</span>
          <span className="number">03</span>

          <label>Garage</label>
        </div>
        <div
          className="cc-card"
          onClick={() => setState({ currentCh: 4 })}
        >
          <span>Challenge</span>
          <span className="number">04</span>

          <label>Zip Codes</label>
        </div>
      </div>

      <div>{showChallenge()}</div>
    </>
  )
}