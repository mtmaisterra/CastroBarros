import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx";
import Inicio from "./views/Inicio.jsx";
import Home from './views/Home.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout><Inicio/></Layout>}/>
        <Route path="/home" element={<Layout><Home/></Layout>}/>
        <Route path="/*" element={<Layout><Inicio/></Layout>}/>
        <Route path="/*" element={<Layout><Inicio/></Layout>}/>

      </Routes>
    </>
  )
}

export default App
