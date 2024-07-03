import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Main from "../../components/Main"
import Footer from "../../components/Footer"

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <Main
                type="h3"
                content="Videos" />
            <Footer />
        </>
    )
}

export default Home