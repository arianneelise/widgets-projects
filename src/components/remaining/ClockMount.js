import { useState } from "react";
import Clock from "../Clock";

export default function ClockMount() {
  let [render, setRender] = useState(false);
  let [button, setButton] = useState("Mount");

  function handleClick() {
    if (button == "Mount") {
      setRender(true);
      setButton("Unmount");
    } else {
      setRender(false);
      setButton("Mount");
    }
  }

  return (
    <div className="clock-mount">
      <h2>CLOCK MOUNT</h2>
      <div>
        {render && (
          <div>
            <Clock mount={render} />
          </div>
        )}
      </div>
      <button onClick={() => handleClick()}>{button}</button>
      <hr />
    </div>
  );
}
