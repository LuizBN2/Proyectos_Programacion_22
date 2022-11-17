import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

//hacemos referencia al ENDPOINT que creamos en node
const URI = 'http://localhost:3001/products/';

//creamos la función para los componentes a utilziar, todo el código queda dentro de la función
const CompShowProducts = ()=>{
    //usamos los hooks
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[]);

    //procedimiento para mostrar todos los productos
    const getProducts = async()=>{
        //paso 31. res es de respuesta, como arriba pusimos asyn, abajo la const debe ir con await
        const res = await axios.get(URI);
        //mostramos los datos de la respueta, accediendo a res que se conecta a URI y trae los data
        setProducts(res.data)
    };

    //procedimiento para eliminar un producto
    const deleteProduct = async(id)=>{
        //paso 32. 
        await axios.delete(`${URI}${id}`);
        //una vez lo elimina nos muestra todos los registros
        getProducts();

    };

    //retornamos la vista de HTML
    return(
        <div className='container'>
            <div className='row justify-content-center gap-3 my-2'> {/* linea 36 para cambios paso 46 */}
                <div className='col-7 border rounded-3 my-auto'>
                    <table className='table'>
                        <thead>
                            <tr>
                               <th scope="col">Producto</th>
                               <th scope="col">Descripción</th>
                               <th scope="col">Precio</th>
                               <th scope="col">Stock</th>
                               <th scope="col">Acciones</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {products.map ((product, index)=>(
                                <tr key={index}>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.precio}</td>
                                    <td>{product.stock}</td>
                                    
                                    <td>                                                                            
                                        <Link to={`/edit/${product._id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>                                           
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
                <div className='col border rounded-3 my-0'>   {/*paso 47  */}
                    <div className='col'>
                    <h3>Crear nuevo producto</h3>
                    <Link to="/create" className='btn btn-primary mt-2 mb-4'><i className="fa-solid fa-plus"></i></Link>
                    <p>Haga clic en el botón para ingresar un nuevo producto, 
                    luego ingrese los datos en la ventana que aparece a continuación.</p>
                    </div>                    
                </div>
            </div>

        </div>
    );


}

export default CompShowProducts;