import Navbar from "./Navbar";
import Footer from "./Footer";

function Idopont() {
    return ( 
        <div>
            <Navbar/>
            <form action="" style={{textAlign:'center'}}>
                <label htmlFor="nev">Név:</label>
                <input type="text" name="nev" id="" /><br />
                <label htmlFor="datum">Rendezvény dátuma:</label>
                <input type="date" name="nev" id="" /><br />
                <label htmlFor="leiras">Leírás:</label>
                <textarea name="leiras" id=""></textarea><br />
                <button type="submit">Elküldés</button>
                <Footer/>
            </form>
        </div>
    );
  }
  
  export default Idopont;