import React from "react";
import './2.lower.css'

function Lower(props){
    return(
        <div className="container">
<img className="img" src={props.image} alt={props.extraname} />
<h2>{props.name}</h2>
<p>{props.content}</p>
<button className="btn">Learn more →</button>
        </div>
    );
}

export default Lower;