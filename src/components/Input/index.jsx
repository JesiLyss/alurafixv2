import './Input.modules.css';

function Input({placeholder, label, id}){

    placeholder += "...";

    return(
    <>
        <div className="input__container">
            <label className="label" htmlFor="id">{label}</label>
            <input className="input" type="text" placeholder={placeholder}></input>
        </div>
    </>
    )
}

export default Input