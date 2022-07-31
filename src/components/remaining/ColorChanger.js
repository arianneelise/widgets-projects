import { useEffect, useState } from "react";

export default function ColorChanger() {
  let [textColor, setTextColor] = useState("Pink");
  let [text, setText] = useState(null);
  let colorStyle = {
    color: `${textColor}`,
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="color-changer">
      <h2>COLOR CHANGER</h2>
      <h3 style={colorStyle}>{textColor}</h3>

      <form onChange={handleChange}>
        <input
          type="text"
          className="color-text"
          placeholder="Type a Color"
          value={text}
        />
      </form>

      <button
        onClick={() => {
          setTextColor(text);
          setText("");
        }}
      >
        Press Me
      </button>
      <hr />
    </div>
  );
}
