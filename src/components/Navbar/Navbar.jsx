import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
  return (
    <header >
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src="../src/assets/img/logo.png" alt="Mateados" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mates</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Termos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Bombillas</a>
            </li>
          </ul>
        </div>
        <div >
          <CartWidget urlImg="../src/assets/img/cart.svg" cantidad={2} />  </div>
      </nav>
    </header>
  )
}

export default Navbar 