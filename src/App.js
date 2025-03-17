import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SingInFrom from "./From/SingInFrom";
import From from "./From/SingUpFrom";
import SingUpFrom from "./From/SingUpFrom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SingInFrom/>} />
      <Route path="/SingUp" element={<From/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
