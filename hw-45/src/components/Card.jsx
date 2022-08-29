import React from "react";

function Card (props) {
    const cardTitle = props.title ? <h4 className="card-title">{props.title}</h4> : null;
    const cardText = props.text ? <p className="card-text">{props.text}</p> : null;

    return <div className="card">
        <div className="card-body">
            {cardTitle}
            {cardText}
        </div>
    </div>
}

export default Card;