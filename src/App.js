
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<Detail />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
