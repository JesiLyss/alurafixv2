import Image from "../Image/index.jsx";
import banner from './dogs-banner.webp'

const Banner = () =>{
    return(
        <div className="banner">
            <Image img={banner} alt="Imagen de dos perros juntos" />
        </div>
    );
}

export default Banner