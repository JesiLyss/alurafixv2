import './Button.modules.css';

function Button({url, content, styles}){

    styles = "btn " + styles;

    return (
    <>
        <a href={url} className={styles}>{content}</a>
    </>
    )
}

export default Button