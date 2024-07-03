import Title from '../Title';
import './Main.modules.css';

function Main({type, content, mainContent}){
    return(
    <>
        <div className="container">
            <Title type={type} content={content} />
            {mainContent}
        </div>
    </>
    )
}

export default Main