import { useContext } from "react";
import { Outlet, useNavigate} from "react-router-dom"
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
import Header from "./Header";

const Layout = () => {
    const { setAuth, keepLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        delete axios.defaults.headers.common['Authorization'];
        localStorage.clear();
        setAuth({});
        keepLogin({});
        navigate('/login');
    }

    return (
        <main className="App">
            <Header logout = {logout}/>
            <span class="dot1"></span> 
            <span class="dot2"></span>  
            <Outlet />
        </main>
    )
}

export default Layout;
