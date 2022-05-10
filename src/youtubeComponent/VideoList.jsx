import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ searchResults, onVideoSelect }) => {
  const renderedVideos = searchResults.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

export default VideoList;
