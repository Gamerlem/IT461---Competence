import { useContext } from "react";
import { Outlet, useNavigate} from "react-router-dom"
import AuthContext from "../context/AuthProvider";
import Header from "./Header";

const Layout = () => {
    const { setAuth, keepLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        keepLogin({});
        navigate('/login');
    }

    return (
        <main className="App">
            <Header logout = {logout}/>
            <Outlet />
        </main>
    )
}

export default Layout;
