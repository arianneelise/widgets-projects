import { useState } from "react";

import Header from "../components/Header";
import FontSizer from "../components/remaining/FontSizer";

export default function Hide() {
  let [text, setText] = useState("Hide");

  return (
    <div className="remaining-wrapper">
      <Header home={true} />
      <FontSizer />
    </div>
  );
}
