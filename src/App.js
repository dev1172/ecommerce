 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from '../src/component/NavbarComp';
import Product from '../src/component/product';
import Acceuil from './component/Acceuil';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
 
 

function App() {
  return (
    <Router>
      <BasicExample/>
      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={null}/>
      </Routes>
    </Router>

  );
}

export default App;