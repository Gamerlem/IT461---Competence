import React from "react";
import Landing from "./Landing";



const Home = ({robots, getBots, deleteHandler}) =>{    
    return(
        <div>
            <Landing bots ={robots} getBots ={getBots} deleteHandler = {deleteHandler}/>
        </div>
    );
}

export default Home;