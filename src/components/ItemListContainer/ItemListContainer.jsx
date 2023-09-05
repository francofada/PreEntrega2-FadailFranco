import { getProducts, getProductsByCategory } from "../../asyncMok"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import clasess from './ItemListContainer.module.css'
import { useParams } from "react-router-dom"
import { LineWobble } from '@uiball/loaders'


//Logica de Estado
const ItemLisContainer =({greeting})=>{
    const [products, setProducs] = useState([])
    const {categoryId} =useParams()
    const [loading ,setLoading] = useState(true)
    useEffect(()=>{
        const asyncFunction = categoryId?getProductsByCategory: getProducts


        asyncFunction(categoryId).then(result =>{
            setProducs(result)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[categoryId])

    console.log(products)
    
    if(loading){
        return <LineWobble size={80} lineWeight={5} speed={1.75} color="black"/>
    }

    return(
        <div>
                <h1>{greeting}</h1>
                <div className={clasess.menu}>
                    <ItemList products={products}/>
                    
                </div>
        </div>
    )
}

export default ItemLisContainer