import Navbar from '../components/Navbar/Navbar';
import linkedImg from "../assets/linked.png"
import instImg from "../assets/instagram.png"
import faceImg from "../assets/facebook.png"
import twiImg from "../assets/twitter.png"
import youtImg from "../assets/youtube.png"
import '../scss/Home.scss';
import ProductIntroduction from "../components/ProductIntroduction/ProductIntroduction";
import ListOfProducts from "../components/ListOfProducts/ListOfProducts";
import CartModalBox from "../components/CartModalBox/CartModalBox";
import {useHomeState, withHomeProvider} from "../context/HomeContext";


function Home() {
    const { isModalBoxOpened } = useHomeState();

    return (
        <div className="container">
            <Navbar />
            <ProductIntroduction />
            <ListOfProducts />
            { isModalBoxOpened && <CartModalBox />}
            <div className="footer">
                Contact with us :  <img className="footer__images" src={linkedImg} alt={"ra"}/>  <img className="footer__images" src={instImg} alt={"ra"}/>  <img className="footer__images" src={faceImg} alt={"ra"}/>   <img className="footer__images" src={twiImg} alt={"ra"}/> <img className="footer__images" src={youtImg} alt={"ra"}/>
            </div>
        </div>
    );
}

export default withHomeProvider(Home)
