import React from "react";
import "./HKBS/HKBS.css";

// bd-placeholder-img bd-placeholder-img-lg featurette-image

function Image(props)
{
    return (
      <img src={props.img} className="image"
      />
    );
}

export default Image;

// img-fluid mx-auto