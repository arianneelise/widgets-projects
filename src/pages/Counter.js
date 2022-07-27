import { useState } from "react";

import Header from "../components/Header";

export default function Counter() {
  let [number, setNumber] = useState(0);

  return (
    <div>
      <Header home={true} />
      <div className="counter-wrapper">
        <div className="number">{number}</div>

        <div className="buttons">
          <button className="add" onClick={() => setNumber(number + 1)}>
            ADD
          </button>
          <button
            className="subtract"
            onClick={() => (number > 0 ? setNumber(number - 1) : null)}
          >
            SUBTRACT
          </button>
        </div>
      </div>
    </div>
  );
}
