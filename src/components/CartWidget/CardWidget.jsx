import CartImg from './assets/3.svg'
import clasess from './CardWidget.module.css'

const CartWidget = () =>{
    return(
        <button className={clasess.carro}>
            <img src={CartImg} width="40px"/>
            <h3>0</h3>
        </button>
    )
}

export default CartWidget