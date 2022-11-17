import axios from "axios";
import { useState, useEffect } from "react"; 
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3001/products/';

const CompEditProducts = ()=>{
    //desde aquí el paso 55. un useState para cada campo de la base de datos
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const navigate = useNavigate();

    //como necesitamos el id del elemento que vamos a editar usamos el params de parámetros
    const {id} = useParams();

    //pocedimiento para actualizar
    const update = async (e)=>{
        e.preventDefault();
        await axios.put(`${URI}${id}`, {nombre:nombre, descripcion:descripcion, precio:precio,stock:stock});
        navigate('/');
    }

    //uso del effect para controlar los cambios externos a la base de datos
    useEffect( ()=>{
        getProductById();
    },[]);

    const getProductById = async () =>{
        const res = await axios.get(`${URI}${id}`);
        setNombre(res.data.nombre);
        setDescripcion(res.data.descripcion);
        setPrecio(res.data.precio);
        setStock(res.data.stock);
    };

    return(
        <div>
            <h1>Editar Productos</h1>
            <form onSubmit={update}>
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
                        value={precio || 2}
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
                        value={stock || 3}
                        onChange={ (e)=>setStock(e.target.value)}
                        type="number"
                        className="form-control"                    
                    />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary">Actualizar</button>
                </div>
            </form>
        </div>
    );
};

export default CompEditProducts;