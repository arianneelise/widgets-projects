import { useState } from "react";

export default function FontSizer() {
  let [font, setFont] = useState(18);

  return (
    <div className="font-sizer">
      <h2>FONT SIZER</h2>
      <div style={{ fontSize: `${font}px` }}>Change my font size!</div>
      <button onClick={() => (font > 5 ? setFont(font - 5) : null)}>
        DECREASE
      </button>
      <button onClick={() => (font < 100 ? setFont(font + 5) : null)}>
        INCREASE
      </button>
      <hr />
    </div>
  );
}
