import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="img" src={props.img} />
      <div className="title">{props.title}</div>
      <div>{props.description}</div>
      <div className="links">
        <a href="#">{` ${props.link1} `}</a>
        <a href="#">{` ${props.link2} `}</a>
      </div>
    </div>
  );
}
