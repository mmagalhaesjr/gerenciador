import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Inicial from "./pages/Inicial/Inicial";
import Tarefas from "./pages/Tarefas/Tarefas";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Login />} />
          <Route path="/cadastro" exact element={<Cadastro />} />
          
          <Route path="/inicial" exact element={<Inicial />} />
          <Route path="/tarefas" exact element={<Tarefas />} />
         
         

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
