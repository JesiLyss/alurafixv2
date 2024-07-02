function Image({img, alt}){

    // cuando incorpore styled components utilizar parametros para recibir altura y ancho

    return(
    <>
        <img src={img} alt={alt}/>
    </>
    )
}

export default Image