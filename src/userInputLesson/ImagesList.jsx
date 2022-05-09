import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const ImagesRendered = images.map(({ description, id, urls }) => {
    return <ImageCard description={description} key={id} image={urls.regular} />;
  });
  return <div className="grid-list">{ImagesRendered}</div>;
};

export default ImageList;
