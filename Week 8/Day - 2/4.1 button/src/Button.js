import React from "react";

export default function Button(props) {
  return (
    <div>
      <button className="btn" style={{ fontWeight: `${props.font}` }}>
        {props.title}
      </button>
    </div>
  );
}
