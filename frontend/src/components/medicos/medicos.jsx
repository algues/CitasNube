import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Medicos = () => {
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        const fecthAllMedicos = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/medicos/");
                setMedicos(res.data);

            }catch(err){
                console.log(err)
            }
        }
        fecthAllMedicos();
        
    }, []);

    const handleDelete = async (_id) => {
        try{
           await axios.delete("http://localhost:8800/medicos/"+ _id);
           window.location.reload();
        }catch(err){
           console.log(err)
        }
    }

    return(
        <did>
            <table className='table table-bordered border-primary'>
                <thead>
                   <tr>
                     <td colSpan={6}><h3 className='titulo'>Administrar Medicos</h3></td>
                   </tr> 
                   <tr className='table-info'>                                  
                     <th>Identificacion</th> 
                     <th>Apellidos</th>
                     <th>Nombres</th>
                     <th>Especialidad</th>
                     <th>Telefono</th>
                     <th>Acciones</th>
                   </tr>        
                </thead>
                <tbody>
                     {medicos.map((medico) =>(
                        <tr key={medico._id}>                           
                           <td>{medico.identificacion}</td>
                           <td>{medico.apellidos}</td>
                           <td>{medico.nombres}</td>
                           <td>{medico.especialidad}</td>
                           <td>{medico.telefono}</td>
                           <button className='btn btn-danger' onClick={() => handleDelete(medico._id)}>Delete</button>
                           <button className='btn btn-info'><Link to={`/updateMedicos/${medico._id}`}>Update</Link></button>
                        </tr>
                     ))}
                </tbody>
                <tr>
                  <td colSpan={6}>
                    <button className='btn btn-info'><Link to="/addMedicos">Add Medicos</Link></button>
                    <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                  </td>
                </tr>
            </table>
        </did>
    )
}

export default Medicos;