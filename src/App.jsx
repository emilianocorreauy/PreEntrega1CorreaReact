import Navbar from './components/Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainers/ItemListContainers.jsx';


function App() {
  return (
    <>
      <div>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenido'}/>
      </div>
    </>
  )
}

export default App

