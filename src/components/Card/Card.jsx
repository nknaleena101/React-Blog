import React from "react";
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom'
import "./Card.css";

function Card(props) {
  return (
    <div className="card-content">
      <div className="card-top">
        <img className="card-top__img" src={props.image} alt={props.id} />
        <div className="card-top__btn">
            <Link to='/BlogPosts'><ArrowUpRight /></Link>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__category">
          <div className="circle"></div>
          <p>{props.category}</p>
        </div>
        <h2 className="card-bottom__title">{props.title}</h2>
      </div>
    </div>
  );
}

export default Card;
