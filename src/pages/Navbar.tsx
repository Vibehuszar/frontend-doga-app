import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

 

function Navbar() {
    return ( 
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item">
                <Link className="nav-link mx-2" aria-current="page" to="/">Főoldal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/tapasztalat">Szakmai tapasztalat</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/idopont">Időpontfoglalás</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
    );
  }
  
  export default Navbar;