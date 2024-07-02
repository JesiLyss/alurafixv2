import Error from "./pages/Error";
import NewVideo from "./pages/NewVideo";

const { BrowserRouter, Routes, Route } = require("react-router-dom");
const { Home } = require("./pages/Home");

function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<NewVideo />} />
            <Route path="*" element={<Error />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter