import { Link } from "react-router-dom"

const Home  = () => {
  return (
    <>
      <h1>Hola, Bienvenidos a la App</h1>
      <p>Conoce las 100 Criptos mas usadas</p>
      <Link to="/criptomonedas">Ver Criptomonedas</Link>
    </>
  )
}

export default Home
