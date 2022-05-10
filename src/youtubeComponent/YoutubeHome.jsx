import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class YoutubeHome extends React.Component {
  state = { searchResults: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("fireship.io");
  }

  onSearchSubmit = async (textInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: textInput,
      },
    });

    this.setState({
      searchResults: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {" "}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                searchResults={this.state.searchResults}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeHome;
