import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

const YoutubeHome = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState(null);

  useEffect(() => {
    onSearchSubmit("fireship.io");
  }, []);

  const onSearchSubmit = async (textInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: textInput,
      },
    });

    setVideos(response.data.items);
    setSelectedVideos(response.data.items[0]);
  };


  const onVideoSelect = (video) => {
    selectedVideos(video)
    
  };

  return (
    <div className="ui container">
      <SearchBar onSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {" "}
            <VideoDetail video={selectedVideos} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default YoutubeHome;
