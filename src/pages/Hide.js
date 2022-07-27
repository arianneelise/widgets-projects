import { useState } from "react";

import Header from "../components/Header";

export default function Hide() {
  let [text, setText] = useState("Hide");

  return (
    <div className="hide-wrapper">
      <Header home={true} />
      <div className="text-box">
        {text == "Hide" && <div className="text">Hello</div>}
      </div>
      <button
        onClick={() => (text == "Hide" ? setText("Show") : setText("Hide"))}
      >
        {text}
      </button>
    </div>
  );
}
