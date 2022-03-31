import { useState } from "react"
import "./styles.css";

import { getPalindromes } from "../../services/ch1-service";


export function Ch1() {
  const [init, setInit] = useState<any>('');
  const [end, setEnd] = useState<any>('');
  const [results, setResults] = useState<any>([]);


  function handlePrint() {
    getPalindromes(init, end).then((p) => setResults(p));
  };



  return (
    <div className="ch1-container">
      <label className="ch1-label">Palindrome</label>
      <div className="ch1-sub-label">Choose the range:</div>

      <div className="ch1-inputs-wrapper">
        <input
          className="ch1-input"
          type="number"
          placeholder="init"
          value={init}
          onChange={e => setInit(e.currentTarget.value)}
        />
        <input
          className="ch1-input"
          type="number"
          placeholder="end"
          value={end}
          onChange={(e) => setEnd(e.currentTarget.value)}
        />
      </div>

      <div className="ch1-button" onClick={() => handlePrint()}>
      Show Palindromes
      </div>

      <div className="ch1-palindromes">
        {results.map((p: string) => (
          <span key={p}>{p + ", "}</span>
        ))};
      </div>
    </div>
  )
}
