import Navbar from "./Navbar";
import img from "../images/petrik.jpg"
import Footer from "./Footer";

function Tapasztalat() {
    return ( 
        <div>
            <Navbar/>
            <div>
                <img style={{width:'500px', float:"right"}} src={img} alt="" />
                <h1>Pro-bono bulik</h1>
                <ul>
                    <li>Csibeavató, 2021. 08. 31.</li>
                    <li>Karácsonyi bál, 2021. 12. 22.</li>
                    <li>Farsangi mulatság, 2022. 02. 20.</li>
                </ul>
                <h1>Professzionális bulik</h1>
                <ul>
                <li>Tanárkarácsony, 2021. 12. 20.</li>
                    <li>Ballagás, 2022. 04. 30.</li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
  }
  
  export default Tapasztalat;