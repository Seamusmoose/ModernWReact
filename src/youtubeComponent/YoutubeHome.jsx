import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class YoutubeHome extends React.Component {
  state = {};

  onSearchSubmit = (textInput) => {
    youtube.get("/search", {
      params: {
        q: textInput,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default YoutubeHome;
