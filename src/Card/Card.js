import React from 'react';

import "./Card.css";

const card = ( props ) => {
    return (
        <div className="infoCard">
            <img className="cardImage" src={props.imgSrc}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button>Learn More</button>
        </div>
    );
};

export default card;