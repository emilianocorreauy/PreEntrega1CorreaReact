import Navbar from './components/Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainers from './components/ItemListContainers/ItemListContainers.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationsService'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainers greeting={'Bienvenidos'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainers greeting={'Listado de productos filtrados'} />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartView />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App

