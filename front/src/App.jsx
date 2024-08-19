import Navbar from './components/navbar/Navbar';
import Contacto from "./views/contacto/Contacto";
import MisTurns from "./views/Mis Turnos/MisTurnos";
import FormikLogin from './views/login/Login';
import FormikRegister from './views/register/Register';
import Home from "./views/home/Home"
import {Routes, Route} from "react-router-dom";
import TurnosRegister from './views/crearTurno/TurnoRegister';


function App() {
 return(
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/login' element={<FormikLogin/>}/>
      <Route path='/turnos' element={ <MisTurns/> }/>
      <Route path='/register' element={<FormikRegister/>}/>
      <Route path='/turncreate' element={<TurnosRegister/>}/>
    </Routes>

    </>

 );
}

export default App
