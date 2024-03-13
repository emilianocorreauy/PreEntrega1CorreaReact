import Navbar from './components/Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainers/ItemListContainers.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <section>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de la categoría: '} />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
           </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App

