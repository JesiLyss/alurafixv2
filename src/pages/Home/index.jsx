import './Home.modules.css';
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Main from "../../components/Main";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

function Home(){

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/videos")
        .then((res) => res.json())
        .then((data) => setVideos(data));
    }, []);

    
    const cards = videos.map((video) =>{
        return <Card video={video} key={video.id}/>
    });

    return(
        <>
            <Header />
            <Banner />
            <Main
                styles="card__container"
                type="h3"
                content="Videos"
                mainContent={cards}
                />
            <Footer />
        </>
    )
}

export default Home