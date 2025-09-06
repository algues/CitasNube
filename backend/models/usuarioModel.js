import mongoose from "mongoose";


const usuarioSchema = new mongoose.Schema({
    usernama: {type:String, required:true},
    password: {type:String, required:true}
},
 {timestamps:true} 
)

const usuarioModel = mongoose.model('usuario', usuarioSchema)
export default usuarioModel;