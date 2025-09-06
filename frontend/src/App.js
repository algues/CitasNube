import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Medicos from './components/medicos/medicos';
import AddMedicos from './components/medicos/addMedicos';
import UpdateMedicos from './components/medicos/updateMedicos';
import Home from './components/home';
import Login from './components/login';
import Pacientes from './components/pacientes/pacientes';
import Consultorios from './components/consultorios/consultorios';
import Citas from './components/citas/citas';
import Tratamientos from './components/tratamientos/tratamientos';
import AddCitas from './components/citas/addCitas';
import AddPacientes from './components/pacientes/addPacientes';
import AddConsultorios from './components/consultorios/addConsultorios';
import AddTratamientos from './components/tratamientos/addTratamientos';
import UpdatePacientes from './components/pacientes/updatePacientes';
import UpdateConsultorios from './components/consultorios/updateConsultorios';
import UpdateCitas from './components/citas/updateCitas';
import UpdateTratamintos from './components/tratamientos/updateTratamientos';
import ReportePacientes from './components/pacientes/reportePacientes';
import ReporteMedicos from './components/medicos/reporteMedicos';
import ReporteConsultorios from './components/consultorios/reporteConsultorios';
import ReporteCitas from './components/citas/reporteCitas';
import ReporteTratamientos from './components/tratamientos/reporteTratamientos';

function App() {
  return (
    <div className="App">
      <header className="">
         <Router>
           <Routes>
               <Route path='/' element={<Login />}></Route>
               <Route path='/home' element={<Home />}></Route>               
               <Route path='/medicos' element={<Medicos />}></Route>
               <Route path='/addMedicos' element={<AddMedicos />}></Route>
               <Route path='/updateMedicos/:_id' element={<UpdateMedicos />}></Route> 
               <Route path='/pacientes' element={<Pacientes />}></Route> 
               <Route path='/consultorios' element={<Consultorios />}></Route>   
               <Route path='/citas' element={<Citas />}></Route>  
               <Route path='/tratamientos' element={<Tratamientos />}></Route>  
               <Route path='/addCitas' element={<AddCitas />}></Route>
               <Route path='/addPacientes' element={<AddPacientes />}></Route> 
               <Route path='/addConsultorios' element={<AddConsultorios />}></Route> 
               <Route path='/addTratamientos' element={<AddTratamientos />}></Route>  
               <Route path='/updatePacientes/:_id' element={<UpdatePacientes />}></Route>  
               <Route path='/updateConsultorios/:_id' element={<UpdateConsultorios />}></Route>
               <Route path='/updateCitas/:_id' element={<UpdateCitas />}></Route>
               <Route path='/updateTratamientos/:_id' element={<UpdateTratamintos />}></Route>
               <Route path='/reportePacientes' element={<ReportePacientes />}></Route>
               <Route path='/reporteMedicos' element={<ReporteMedicos />}></Route>
               <Route path='/reporteConsultorios' element={<ReporteConsultorios />}></Route>
               <Route path='/reporteCitas' element={<ReporteCitas />}></Route>
               <Route path='/reporteTratamientos' element={<ReporteTratamientos />}></Route>
           </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
