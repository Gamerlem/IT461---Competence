import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import Header from "./Header";
import Landing from "./Landing";



const Home = () =>{
    const { setAuth, keepLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        keepLogin({});
        navigate('/login');
    }

    return(
        <div>
            <Header logout = {logout}/>
            <Landing />
        </div>
    );
}

export default Home;