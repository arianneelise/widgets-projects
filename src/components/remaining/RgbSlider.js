import { useState } from "react";

export default function RgbSlider() {
  let [r, setR] = useState(0);
  let [g, setG] = useState(0);
  let [b, setB] = useState(0);
  let [rgb, setRgb] = useState(`rgb(0,0,0)`);
  let divStyle = {
    backgroundColor: `${rgb}`,
  };

  const handleChange = (e) => {
    if (e.target.className == "r") {
      setR(e.target.value);
    } else if (e.target.className == "g") {
      setG(e.target.value);
    } else {
      setB(e.target.value);
    }
    setRgb(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div className="rgb-slider">
      <h2>RGB SLIDER</h2>
      <div style={divStyle} className="background"></div>
      <p>{rgb}</p>
      <div className="slide-container">
        <input
          onChange={handleChange}
          type="range"
          min="0"
          max="255"
          className="r"
        />
        <input
          onChange={handleChange}
          type="range"
          min="0"
          max="255"
          className="g"
        />
        <input
          onChange={handleChange}
          type="range"
          min="0"
          max="255"
          className="b"
        />
      </div>
      <hr />
    </div>
  );
}
