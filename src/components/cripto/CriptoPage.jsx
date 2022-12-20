import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./criptoPage"

const CriptoPage = () => {

  const API_URL = import.meta.env.VITE_API_URL
  const params = useParams()
  const [cripto, setCriptos] = useState({})
  const [history, setHistory] = useState([])


  useEffect(() => {
    axios.get(`${API_URL}assets/${params.id}`)
      .then((data) => {
        setCriptos(data.data.data)
    }) 
    .catch(e => console.error(e)) 

    axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
      .then((data) => {
        setHistory(data.data.data)
    }) 
    .catch(e => console.error(e)) 
    }, [])

  return (
    <div className="cripto-page-container">
      <div className="info">
        <div className="main-info">
          <span>Rank: {cripto.rank}</span>
          <h1>{cripto.name}</h1>
          <span className="symbol">{cripto.symbol}</span>
        </div>
        <div className="details">
          <ul>
            <li className="detail">
              <span className="label">Precio: </span>
              <span>{parseFloat(cripto.priceUsd, 3)}</span>
            </li>
            <li className="detail">
              <span className="label">MaxSupply: </span>
              <span>{parseFloat(cripto.maxSupply, 3)}</span>
            </li>
            <li className="detail">
              <span className="label">Market Cap (USD): </span>
              <span>{parseFloat(cripto.marketCapUSd, 3)}</span>
            </li>
            <li className="detail">
              <span className="label">Volumen (USD - 24 Hrs.): </span>
              <span>{parseFloat(cripto.volumenUsd24Hr, 3)}</span>
            </li>
            <li className="detail">
              <span className="label">Variacion (24 Hrs.): </span>
              <span>{parseFloat(cripto.changePercent24Hr, 3)}</span>
            </li>
            <li className="detail">
              <span className="label">Vwap 24 Hrs.: </span>
              <span>{parseFloat(cripto.vwap24Hr, 3)}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="history">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({date, priceUsd, time }) => (
              <tr key={time}>
                <td className="label">{new Date(date).toDateString()}</td>
                <td className="price">{parseFloat(priceUsd, 3)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div> 
  )
}

export default CriptoPage