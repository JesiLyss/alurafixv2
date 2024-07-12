import "./NewVideo.modules.css";
import Form from "../../components/Form";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Main from "../../components/Main";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Card/Button";
import Select from "../../components/Select";
import { useEffect, useState } from "react";

function NewVideo(){

    // const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(data => setCategories(data));
    }, []);

    const handleAdd = () => {
        const newVideo = {
            title: title,
            description: description,
            category: category,
            url: url,
            image: image
        };

        console.log(newVideo);

        fetch("http://localhost:3000/videos",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVideo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data){
                window.location.href("http://localhost:3001");
            }
        });
    };

    const cleanValues = () => {
        setTitle("");
        setDescription("");
        setCategory("");
        setUrl("");
        setImage("");
    }

    return(
        <>
            <Header />
            <Main 
                mainContent={
                    <Form event={handleAdd} className="form"
                        content={
                            <>
                            
                            <Title type="h4" content="Nuevo Video" />
                            
                            <Input type="text" placeholder="Ingrese el título del video" label="Título:" id="title" value={title} event={(e)=> setTitle(e.target.value)} />
                            
                            <Select label="Categorías" options={categories} selectID="category" value={category} event={(e)=> setCategory(e.target.value)} />
                            
                            <Input type="text" placeholder="Ingrese la descripción del video" label="Descripción:" id="description" value={description} event={(e)=> setDescription(e.target.value)} />
                            
                            <Input type="text" placeholder="Ingrese la url del video" label="Dirección:" id="direction" value={url} event={(e)=> setUrl(e.target.value)} />
                            
                            <Input type="text" placeholder="Ingrese la imagen del video" label="Imagen:" id="videoimg" value={image} event={(e)=> setImage(e.target.value)} />

                            <div className="btn__container">
                                <Button type="submit" content="Agregar" styles="add" />
                                <Button type="button" content="Limpiar" styles="clean" event={cleanValues} />
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