import Image from '../Image';
import banner from './dogs-banner.webp';
import Title from '../Title';
import './Banner.modules.css';

function Banner(){
    return(
    <>
        <div className="banner">
            <Title styles="title" content="Crea y descubre los mejores videos en Alura Flix" type="h3" />
            <Image styles="img" img={banner} alt="Imagen de dos perros juntos" />
        </div>
    </>
    );
}

export default Banner