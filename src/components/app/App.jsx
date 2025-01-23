import './App.modules.scss'
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {MainPageUi} from "../main/Main.jsx";
import {LoginPageUi} from "../login/Login.jsx";

const App = () => {
    const location = useLocation();
    const backgroundLocation = location.state?.background;
    return (
        <Routes location={backgroundLocation || location}>
            <Route path='/' element={<MainPageUi/>}/>
            <Route path='/login' element={<LoginPageUi/>}/>
        </Routes>
    )
}

export default App
