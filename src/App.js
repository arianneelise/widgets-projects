import { BrowserRouter, Route, Routes } from "react-router-dom";

import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Greeting from "./pages/Greeting";
import Hide from "./pages/Hide";
import Remaining from "./pages/Remaining";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/hide" element={<Hide />} />
          <Route path="/remaining" element={<Remaining />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
