
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./routes/Home";


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
