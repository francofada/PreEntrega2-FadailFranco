import clasess from './ItemDetail.module.css'

const ItemDetail = ({name,img,category,description,price}) =>{

    return(
        <div className={clasess.card}> 
        <img src={img}/>
        <div className={clasess.card_name}>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <h3>PRECIO$ {price}</h3>
            <a href="#">COMPRAR</a>
        </div>

    </div>

    )
}

export default ItemDetail