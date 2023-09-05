import clasess from './NavBar.module.css'
import NavImg from './assets/logo1.svg'
import CartWidget from '../CartWidget/CardWidget'
import { useNavigate } from 'react-router-dom'


const NavBar =() =>{
    const navigate = useNavigate()
    return(
    
        <nav className={clasess.container}>
            <section>
                    <a onClick={()=>navigate(`/category/remeras`)}>REMERAS</a>
                    <a onClick={()=>navigate(`/category/pantalones`)}>PANTALONES</a>
                    <a onClick={()=>navigate(`/category/accesorios`)}>ACCESORIOS</a>
            </section>
            <img onClick={()=>navigate(`/`)} src={NavImg} width="70px"/>
            <label>Buscar <input type="text" /></label>
           <CartWidget/>
        </nav>
    
        
    )
}

export default NavBar