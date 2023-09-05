import  './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemLisContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
      <div className='body'>
        <NavBar />
            <Routes>
              <Route path='/' element={ <ItemLisContainer greeting='NUESTROS PRODUCTOS'/>}/>
              <Route path='/category/:categoryId' element={ <ItemLisContainer greeting='PRODUCTOS POR CATEGORIA'/>}/>
              <Route path='/detail/:productID' element={ <ItemDetailConteiner/>}/>
            </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
