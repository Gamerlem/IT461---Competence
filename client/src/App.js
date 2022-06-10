import RequireAuth from './components/RequireAuth';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxiosPrivate from './hooks/useAxiosPrivate';
import Landing from './components/Landing';
import Layout from './components/Layout';
import RobotAdd from './components/RobotAdd';
import RobotView from './components/RobotView';
import RobotEdit from './components/RobotEdit';
import Login from './components/Login';
import useAuth from './hooks/useAuth';
import Home from './components/Home';
import About from './components/About';
import Missing from './components/Missing';
import Contact from './components/Contact';

const ROLES = {
  'User': 2001,
  'Manufacturer': 1984,
  'Admin': 5150
}


function App() {
  const [bots, setBots] = useState([]);
  const [url, setUrl] = useState('/robots/?limit=6&offset=0')
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const {auth, setAuth} = useAuth();


  const getBots = async (url, options = null) => {
    url+= '&createdby=' + auth.user_id.toString();
    setUrl(url);
    try {
        const response = await axiosPrivate.get(url, options);
        console.log("BOTS: ", response.data);
        setBots(response.data);
    } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
    }
  }

  useEffect(() => {
    try{
      const controller = new AbortController();
      getBots(url, {
          signal: controller.signal
      });
      return () => {
          controller.abort();
      }
    }
    catch(err){
      console.error(err);
    }
      
  }, []);

  const botAddHandler = async (robot) => {
    console.log('Robot: ', robot);
    const response = await axiosPrivate.post('/robots/', JSON.stringify(robot))
    console.log(response.data);
    getBots(url);
  }

  const botUpdateHandler = async (robot) => {
    console.log('Robot: ', robot);
    const response = await axiosPrivate.put('/robots/', JSON.stringify(robot))
    console.log(response.data);
    getBots(url);
  }

  const botdeleteHandler = async (robot) => {
    console.log('Robot: ', robot);
    const response = await axiosPrivate.delete('/robots/', {data : JSON.stringify(robot.id)});
    console.log(response.data);
    getBots(url);
  }


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          {/* <Route path="robots/view" element={<RobotView />} /> */}
        </Route>

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Manufacturer]} />}>
          <Route path="dogs" element={<Dogs dogs={dogs} getDogs={getDogs}/>} />
          <Route path="dogs/create" element={<DogAdd addHandler={dogAddHandler}/>} />
          <Route path="/dogs/view/:id" element={<DogDetail />} />
          <Route path="/dogs/edit/:id" element={<DogEdit updateHandler={dogUpdateHandler}/>} />
          <Route path="/dogs/delete/:id" element={<DogDelete deleteHandler={dogdeleteHandler}/>} />
        </Route> */}

        { <Route element={<RequireAuth allowedRoles={[ROLES.Manufacturer]} />}>
          <Route path="robots" element={<Home bots={bots} getBots={getBots} deleteHandler={botdeleteHandler}/>} />
          <Route path="robots/create" element={<RobotAdd addHandler = {botAddHandler}/>} />
          <Route path="robots/edit/:id" element={<RobotEdit updateHandler={botUpdateHandler}/>} />
          <Route path="robots/view/:id" element={<RobotView />} />
        </Route> }

        {/* catch all */}
        <Route path="*" element={<Missing/>} />
      </Route>
    </Routes>
  );
}

export default App;