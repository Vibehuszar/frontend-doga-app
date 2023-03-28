import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Fooldal from './pages/Fooldal';
import Tapasztalat from './pages/Tapasztalat';
import Idopont from './pages/Idopont';
import Layout from './pages/Layout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Layout />} />
        <Route index element = {<Fooldal/>} />
        <Route path='/tapasztalat' element = { <Tapasztalat/>}/>
        <Route path="/idopont" element={<Idopont />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
