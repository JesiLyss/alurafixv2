import "./NewVideo.modules.css";
import Form from "../../components/Form";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Main from "../../components/Main";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Card/Button";

function NewVideo(){
    return(
        <>
            <Header />
            <Main 
                mainContent={
                    <Form className="form" action="/insert" method="POST"
                        content={
                            <>
                            <Title type="h4" content="Nuevo Video" />
                            <Input placeholder="Ingrese el título del video" label="Título:" id="title" />
                            <Input placeholder="Ingrese la url del video" label="Dirección:" id="direction" />
                            <Input placeholder="Ingrese la descripción del video" label="Descripción:" id="description" />
                            <div className="btn__container">
                                <Button content="Agregar" styles="add" />
                                <Button content="Limpiar" styles="clean" />
                            </div>
                            </>
                        }
                    />
                }
            />
            <Footer />
        </>
    )
}

export default NewVideo