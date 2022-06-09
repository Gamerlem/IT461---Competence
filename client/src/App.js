import RequireAuth from './components/RequireAuth';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxiosPrivate from './hooks/useAxiosPrivate';
import Home from './components/Home';
import Layout from './components/Layout';
import RobotAdd from './components/RobotAdd';
import RobotView from './components/RobotView';
import RobotEdit from './components/RobotEdit';
import RobotDelete from './components/RobotDelete';

const ROLES = {
  'User': 2001,
  'Manufacturer': 1984,
  'Admin': 5150
}


function App() {
  const [dogs, setDogs] = useState([]);
  const [url, setUrl] = useState('/dogs/?limit=3&offset=0')
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  // const getDogs = async (url, options = null) => {
  //   setUrl(url);
  //   try {
  //       const response = await axiosPrivate.get(url, options);
  //       console.log(response.data);
  //       setDogs(response.data);
  //   } catch (err) {
  //       console.error(err);
  //       navigate('/login', { state: { from: location }, replace: true });
  //   }
  // }

  // useEffect(() => {
  //     const controller = new AbortController();
  //     getDogs(url, {
  //         signal: controller.signal
  //     });
  //     return () => {
  //         controller.abort();
  //     }
  // }, []);

  // const dogAddHandler = async ({name}) => {
  //   console.log('DOG: ', name);
  //   const response = await axiosPrivate.post('/dogs/', JSON.stringify({id: 0, name}))
  //   console.log(response.data);
  //   getDogs(url);
  // }

  // const dogUpdateHandler = async (dog) => {
  //   console.log('DOG: ', dog);
  //   const response = await axiosPrivate.put('/dogs/', JSON.stringify(dog));
  //   console.log(response.data);
  //   getDogs(url);
  // }

  // const dogdeleteHandler = async (dog) => {
  //   console.log('DOG: ', dog);
  //   const response = await axiosPrivate.delete('/dogs/', {data : JSON.stringify(dog.id)});
  //   console.log(response.data);
  //   getDogs(url);
  // }


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="robots/view" element={<RobotView />} />
        <Route path="robots/add" element={<RobotAdd />} />
        <Route path="robots/edit" element={<RobotEdit />} />
        <Route path="robots/del" element={<RobotDelete />} />
        {/* <Route path="login" element={<Login />} /> */}

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
          <Route path="/createBot" element={<RobotAdd />} />
          <Route path="/editBot" element={<RobotEdit />} />
        </Route> }

        {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;