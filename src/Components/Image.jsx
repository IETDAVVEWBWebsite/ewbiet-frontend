import React from "react";
import "./HKBS/HKBS.css";

function Image(props)
{
    return (
      <img src={props.img} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto hkbsimage"
      />
    );
}

export default Image;