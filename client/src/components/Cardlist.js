import React from "react";
import "../css/CardList.css"
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card";

const CardList = ({robots, deleteHandler}) => {
    return(
        <div className="mt-4 card-container">
            {
                robots.data.map((robot)=>{
                    return (
                        <Card key={robot.id} robot={robot} deleteHandler = {deleteHandler} />
                    );
                })
            }
        </div>
    );
}

export default CardList;