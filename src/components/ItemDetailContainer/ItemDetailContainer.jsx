import { getProductById } from "../../asyncMok"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailConteiner = ()=>{
    const [product, setProduct] = useState(null)

    const {productID } = useParams()

    useEffect(()=>{
        getProductById(productID)
        .then(resolve=>{
            setProduct(resolve)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    console.log('ItemDetail: '+product)
    return(
        <div>
            <h1>DETALLE DE PRODUCTO</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailConteiner