import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Inha from "./pages/Inha";
import RouteTest from "./components/RouteTest";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/diary/*" element={<Diary></Diary>}></Route>
          <Route path="/edit/:id" element={<Edit></Edit>}></Route>
          <Route path="/edit" element={<Edit></Edit>}></Route>
          <Route path="/new" element={<New></New>}>
            <Route path="inha" element={<Inha></Inha>}></Route>
          </Route>
        </Routes>
        <RouteTest></RouteTest>
      </div>
    </BrowserRouter>
  );
}

export default App;
