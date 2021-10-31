const producto ={
   "id":1,
   "title":"Acuario",
   "variedad":"negro",
   "description":"Te negro Antioxidante, energizante",
   "price":3500,
   "pictureUrl":"acuario"
}

export const apiFetchUnProducto = new Promise((resolve, reject)=>{
   setTimeout(()=>{
       resolve(producto)
   }, 2000)
})

const productos =
[
    {
       "id":1,
       "title":"Acuario",
       "variedad":"negro",
       "description":"Te negro Antioxidante, energizante",
       "price":3500,
       "pictureUrl":"acuario"
    },
    {
       "id":2,
       "title":"Anxi Ruan Zhi",
       "variedad":"negro",
       "description":"Te negro Antioxidante, cafeina alta",
       "price":5500,
       "pictureUrl":"anxi"
    },
    {
       "id":3,
       "title":"Arabica Earl",
       "variedad":"hierba",
       "description":"Hierba antioxidante, cafeina baja",
       "price":7500,
       "pictureUrl":"arabicaearl"
    },
    {
       "id":4,
       "title":"Aries",
       "variedad":"negro",
       "description":"Te negro Antioxidante, energizante",
       "price":6500,
       "pictureUrl":"aries"
    },
    {
       "id":5,
       "title":"Bai Mudan",
       "variedad":"blanco",
       "description":"Te blanco energizante",
       "price":4500,
       "pictureUrl":"baimudan"
    },
    {
       "id":6,
       "title":"Bella Luna",
       "variedad":"hierba",
       "description":"Hierba antioxidante, relajante",
       "price":8500,
       "pictureUrl":"bellaluna"
    },
    {
       "id":7,
       "title":"Berries blue",
       "variedad":"hierba",
       "description":"Hierba antioxidante, digestion",
       "price":4500,
       "pictureUrl":"berries"
    },
    {
       "id":8,
       "title":"Berries Cream",
       "variedad":"hierba",
       "description":"Hierba relajante, sin cafeina",
       "price":7500,
       "pictureUrl":"berrycream"
    },
    {
       "id":9,
       "title":"Blanco Albahaca",
       "variedad":"blanco",
       "description":"Te blanco antioxidante, digestion",
       "price":9500,
       "pictureUrl":"blancoalba"
    },
    {
       "id":10,
       "title":"Blanco Arandano",
       "variedad":"blanco",
       "description":"Te blanco antioxidante, cafeina baja",
       "price":4500,
       "pictureUrl":"blancoarandano"
    }
 ]

 export const apiFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})