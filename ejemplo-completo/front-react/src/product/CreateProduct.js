import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:3001/products/';

const CompCreateProducts = ()=>{
    //desde aquí el paso 55. un useState para cada campo de la base de datos
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const navigate = useNavigate();

    //procedimiento guardar del paso 56
    const store = async (e)=>{
        e.preventDefault();
        await axios.post(URI,{nombre:nombre, descripcion:descripcion, precio:precio,stock:stock })
        navigate('/');
    };


    return(
        <div>
            <h1>Crear Productos</h1>
            <form onSubmit={store}>
                <div className="row mb-2 justify-content-center">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Nombre</label>
                    <div className="col-sm-4">
                    <input
                        value={nombre}
                        onChange={ (e)=>setNombre(e.target.value)}
                        type="text"
                        className="form-control form-control-sm"                    
                    />
                    </div>                    
                </div>
                <div className="row mb-2 justify-content-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Descripción</label>
                    <div className="col-sm-4">
                    <textarea
                        value={descripcion}
                        onChange={ (e)=>setDescripcion(e.target.value)}
                        type="text"
                        className="form-control"                    
                    />
                    </div>
                </div>
                <div className="row mb-2 justify-content-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Precio</label>                    
                    <div className="col-sm-4">
                    <input
                        value={precio}
                        onChange={ (e)=>setPrecio(e.target.value)}
                        type="number"
                        className="form-control"                    
                    />
                    </div>
                </div>
                <div className="row mb-2 justify-content-center">
                <label className="col-sm-2 col-form-label col-form-label-sm">Stock</label>
                    <div className="col-sm-4">
                    <input
                        value={stock}
                        onChange={ (e)=>setStock(e.target.value)}
                        type="text"
                        className="form-control"                    
                    />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default CompCreateProducts;