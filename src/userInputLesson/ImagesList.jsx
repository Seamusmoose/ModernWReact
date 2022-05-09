import React from "react";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const ImagesRendered = images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div className="grid-list">{ImagesRendered}</div>;
};

export default ImageList;
