import productos from './jsonTe'

export const apiFetchUnProducto = async (id)=>{
    const producto =productos.find(prod => prod.id == id)
    return producto
}
 export const apiFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})