//Lista de productos
const products = [
    { 
        id: '1', 
        name: 'Palm Tree', 
        price: 2600, 
        category: 'remeras', 
        img:'https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/photoroom_20230823_124221_1693595777.jpeg?itok=unThqm2B', 
        stock: 25, 
        description:'TODOS NUESTROS ARTÍCULOS SON DE EXCELENTE CALIDAD!'
    },
    { id: '2', 
    name: 'Green Plant', 
    price: 3500, 
    category: 'remeras', 
    img:'https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/da368a9d-c909-46da-88b2-9759e0e14af1_1693595100.jpeg?itok=tMeEV7pd', 
    stock: 16, 
    description:'TODOS NUESTROS ARTÍCULOS SON DE EXCELENTE CALIDAD!'
    },
    { id: '3', 
    name: 'Brave Beach', 
    price: 5200, 
    category: 'remeras', 
    img:'https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/photoroom_20230823_125129_1692996471.jpeg?itok=BGMpHukY', 
    stock: 11, 
    description:'TODOS NUESTROS ARTÍCULOS SON DE EXCELENTE CALIDAD!'
    },
    { id: '4', 
    name: 'Jean Barcelona', 
    price: 6500, 
    category: 'pantalones', 
    img:'https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/jean_barcelona_clasico_sinless_by_mch_1689162262.jpeg?itok=H0w6ZOi0', 
    stock: 17, 
    description:'Jean de hombre corte recto. Rigido. Gris localizado'
    },
    { id: '5', 
    name: 'Jean Mom Acid', 
    price: 8500, 
    category: 'pantalones', 
    img:'https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/whatsapp_image_2023-08-02_at_11.00.48_am_1691078832.jpeg?itok=D-RjTZJx', 
    stock: 23, 
    description:'Jean de hombre mom. Acid wash'
    },
    { id: '6', 
    name: 'Jean Angel', 
    price: 7700, 
    category: 'pantalones', 
    img:'https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/jean_angel_hombre_sinless_by_mch_1686684930.jpeg?itok=BZluA4QU', 
    stock: 5, 
    description:'Jean de hombre azul localizado. Elastizado. Chupin'
    },
]

export const getProducts = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}