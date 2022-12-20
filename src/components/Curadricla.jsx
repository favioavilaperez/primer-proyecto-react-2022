import axios from "axios"
import { useEffect, useState } from "react"
import Cripto from "./cripto/Cripto"
import "./Curadricla.css"

function Curadricla() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
          setCriptos(data.data.data )
    }) 
    .catch(() => {
      console.error("La peticion fallo")
    }) 
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
          <Cripto 
          key={id} 
          name={name} 
          priceUsd={priceUsd} 
          symbol={symbol} 
          changePercent24Hr={changePercent24Hr }
          id={id}
          />
          ))
        }
      </div>
    </div>
  )
}

export default Curadricla
