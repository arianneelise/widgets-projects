import { useState } from "react";

import Header from "../components/Header";

export default function Counter() {
  let [greeting, setGreeting] = useState("Hello.");

  return (
    <div>
      <Header home={true} />
      <div className="greeting-toggle">
        <div className="greeting">{greeting}</div>

        <button
          className="greeting-button"
          onClick={() =>
            greeting == "Hello."
              ? setGreeting("Goodbye.")
              : setGreeting("Hello.")
          }
        >
          Toggle Me
        </button>
      </div>
    </div>
  );
}
