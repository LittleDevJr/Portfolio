import React from 'react';
import { Link } from 'react-router-dom';
import "../style/card.scss";


function Card({ image, subtitle, id }) {
    
    return (
        <Link to={`/projetDescription/${id}`} className="card" >
            <img src={image} alt={subtitle} />
            <p className="subtitleCard">{subtitle}</p>
        </Link>
    );
}

export default Card;