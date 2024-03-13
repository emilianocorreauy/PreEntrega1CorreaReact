import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
  return (
    <header >
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <Link to={'/'}><img src="../src/assets/img/logo.png" alt="Mateados" /></Link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to='/category/Mates'>Mates</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to='/category/Termos'>Termos</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to='/category/Yerba'>Yerba</Link>
            </li>
          </ul>
        </div>
        <div >
          <CartWidget urlImg="../src/assets/img/cart.svg" cantidad={'0'} />  </div>
      </nav>
    </header>
  )
}


export default Navbar 