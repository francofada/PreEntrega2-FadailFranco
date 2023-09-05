import clasess from './Item.module.css'
import { useNavigate } from 'react-router-dom'


const Item = ({id,name,img,category,price}) =>{
    const navigate = useNavigate()

    return(
        <div className={clasess.card}> 
            <img src={img}/>
            <div className={clasess.card_name}>
                <h2>{name}</h2>
                <h3>{category}</h3>
                <h3>PRECIO$ {price}</h3>
                <button onClick={()=> navigate(`/detail/${id}`)}>DETALLE</button>
            </div>

        </div>
    )
}

export default Item