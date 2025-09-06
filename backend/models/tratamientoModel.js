import mongoose from "mongoose";


const tratamientoSchema = new mongoose.Schema({
    fechaAsignada: {type:String, required:true},
    descripcion: {type:String, required:true},
    fechaInicio: {type:String, required:true},
    fechaFin: {type:String, required:true},
    observaciones: {type:String, required:true},
    paciente: {type:String, required:true}
},
 {timestamps:true}
)

const tratamientoModel = mongoose.model('tratamientos', tratamientoSchema)
export default tratamientoModel;