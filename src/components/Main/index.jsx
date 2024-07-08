import Title from '../Title';
import './Main.modules.css';

function Main({type, content, mainContent, styles}){

    if(styles){ styles += " container"; }else{ styles = "container"; }
    

    return(
    <>
        <div className={styles}>
        <Title styles="main__title" type={type} content={content} />
            {mainContent}
        </div>
    </>
    )
}

export default Main