import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/shop';
mongoose.connect(url);

const db = mongoose.connection;
db.on('open', ()=>{
    console.log("¡Conectado a MongoDB!");
});
db.on('err', ()=>{
    console.log("¡Error al conectar a MongoDB!");
});

export default db