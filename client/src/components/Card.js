import React from "react";
import "../css/Card.css"
import 'bootstrap/dist/css/bootstrap.css';

const Card = ({robot}) => {
    return(
        <div class="container">
            <div class="card">
                <div class="imgBx">
                    <img alt="robot" src={`https://robohash.org/${robot.id}`}/>
                </div>
                <div class="contentBx">
                    <h2 className="robot-name">{robot.name}</h2>
                    <div class="size">
                        <h3>September 10, 2022</h3>
                    </div>
                    <div class="color">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                    <div className="btn-container">
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;