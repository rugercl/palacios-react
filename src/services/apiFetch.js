import productos from './jsonTe'

const producto ={
   "id":2,
   "title":"Acuario",
   "variedad":"negro",
   "description":"Te negro Antioxidante, energizante",
   "price":3500,
   "pictureUrl":"acuario"
}

export const apiFetchUnProducto = new Promise((resolve, reject)=>{
    //console.log(apiFetchUnProducto)
    //const producto =productos.find(prod => prod.id == id)
   setTimeout(()=>{
       resolve(producto)
   }, 2000)
})

 export const apiFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})