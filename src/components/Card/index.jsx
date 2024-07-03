import Image from '../Image';
import Title from '../Title';
import Button from './Button';
import './Card.modules.css';

function Card({id, title, desc, url}){
    return (
    <>
        <div className="card">
            <div className="card__img__container">
                <Image alt={desc} img={url} styles="card__img" />
            </div>
            <div className="card__body">
                <Title type="h4" content={title} styles="card__title" />
                <p>{desc}</p>
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