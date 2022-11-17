import ProductModel from "../models/ProductModel.js";

//métodos del CRUD

//Mostrar todos los documentos
export const getAllProduct = async (req, res)=>{
    try{
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch(err){
        res.json( {message: err.message});
    }
};
//mostrar un docuento
export const getProduct = async(req, res)=>{
    try{
        const id = req.params.id;
        const product = await ProductModel.findById({_id:id}).then((product)=>{
            res.status(200).json(product);
        })        
    }catch(err){
        res.json({message: err.message});
    }
};

//crear un documento
export const createProduct = async (req, res)=>{
    try{
        await ProductModel.create(req.body)
        res.status(200).json({
            "message":"¡Producto agregado correctamente!"
        })
    }catch(err){
        res.json({message:err.message})
    }
};

//actualizar un docuemnto
export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        await ProductModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Producto actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//eliminar docuemtno
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        await ProductModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        });
        res.status(200).json({
            "message":"¡Producto eliminado correctamente!"
        });
    } catch (error) {
        res.json( {message: error.message} )
    }
};


