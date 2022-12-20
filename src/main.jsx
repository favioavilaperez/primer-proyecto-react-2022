import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './components/404'
import './main.css'
import App from './components/App'
import Home from './components/Home'
import Curadricla from './components/Curadricla'
import CriptoPage from './components/cripto/CriptoPage'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/criptomonedas' element={<App/>}>
            <Route index element={<Curadricla/>}/>
            <Route path=':id' element={<CriptoPage/>}/>
        </Route>
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
)
