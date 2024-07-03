import Image from '../Image';
import Title from "../Title";
import Button from './Button';
import './Card.modules.css';

function Card(){
    return (
    <>
        <div className="card">
            <div className="card__img__container">
                <Image alt="card texto alternativo" img="../assets/img/dogs-main.webp" styles="card__img" />
            </div>
            <div className="card__body">
                <Title type="h4" content="Nombre Card" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit, ad cupiditate aut et harum reprehenderit quas laboriosam non, esse alias fuga iusto quaerat.</p>
            </div>
            <div className="card__btn__container">
                <Button url="" content="Edit" styles="edit" />
                <Button url="" content="Delete" styles="delete" />
            </div>
        </div>
    </>
    )
}

export default Card