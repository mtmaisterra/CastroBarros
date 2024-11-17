import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx";
import Inicio from "./views/Inicio.jsx";
import Home from './views/Home.jsx';
import Imperdibles from "./views/Imperdibles.jsx";
import Castillo from "./views/Castillo.jsx";
import Iglesias from "./views/Iglesias.jsx";
import Informacion from "./views/Informacion.jsx";
import Paisajes from "./views/Paisajes.jsx";
import QueHacer from './views/QueHacer.jsx';
import QueVisitar from './views/QueVisitar.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Inicio/>}/>
        <Route path="/home" element={<Layout><Home/></Layout>}/>
        <Route path="/imperdibles" element={<Layout><Imperdibles/></Layout>}/>
        <Route path="/castillo" element={<Layout><Castillo/></Layout>}/>
        <Route path="/iglesias" element={<Layout><Iglesias/></Layout>}/>
        <Route path="/informacion" element={<Layout><Informacion/></Layout>}/>
        <Route path="/paisajes" element={<Layout><Paisajes/></Layout>}/>
        <Route path="/queHacer" element={<Layout><QueHacer/></Layout>}/>
        <Route path="/queVisitar" element={<Layout><QueVisitar/></Layout>}/>
      </Routes>
    </>
  )
}

export default App
