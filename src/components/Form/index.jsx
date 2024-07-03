import './Form.modules.css'

function Form({action, method, content}){
    return(
    <>
    <form className="form" action={action} method={method}>
        {content}
    </form>
    </>
    )
}

export default Form