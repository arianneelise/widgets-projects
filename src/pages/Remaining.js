import { useState } from "react";

import Header from "../components/Header";
import FontSizer from "../components/remaining/FontSizer";
import ClockMount from "../components/remaining/ClockMount";
import ColorChanger from "../components/remaining/ColorChanger";
import RgbSlider from "../components/remaining/RgbSlider";

export default function Hide() {
  let [text, setText] = useState("Hide");

  return (
    <div className="remaining-wrapper">
      <Header home={true} />
      <FontSizer />
      <ClockMount />
      <ColorChanger />
      <RgbSlider />
    </div>
  );
}
