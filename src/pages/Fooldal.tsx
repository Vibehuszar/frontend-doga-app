import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "../images/dj.jpg"

function Fooldal() {
    return ( 
        <div>
            <Navbar/>
            <div style={{textAlign: "center"}}>
            <p>Üdvözöllek DJ Petrik weboldalán!</p> 
            <p>Válassz a fenti lehetőségek közül!</p>
            <img style={{width:'600px'}} src={img} alt="" />
            </div>
            <Footer/>
        </div>
    );
  }
  
  export default Fooldal;