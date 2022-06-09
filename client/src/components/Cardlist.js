import React from "react";
import "../css/CardList.css"
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card";

const CardList = ({robots}) => {
    return(
        <div className="mt-4 card-container">
            {
                robots.map((robot)=>{
                    return (
                        <Card key={robot.id} robot={robot} />
                    );
                })
            }
        </div>
    );
}

export default CardList;