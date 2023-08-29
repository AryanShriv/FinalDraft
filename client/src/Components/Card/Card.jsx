import React from 'react'


const Card = (props) => {
  return (
    <div className="card" key={props.title}>
      <img src={props.cover} alt="Loading" />
      <div className="card-content">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card