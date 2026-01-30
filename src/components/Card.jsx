import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-80 w-84 overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
            alt=""
          ></img>
        </div>
        <h2 className="font-bold py-2 text-xl">{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
