import React from "react";
import ReactDOM from "react-dom";
import unsplash from "../api/unsplash";
import ImageList from "./ImagesList";
import SearchBar from "./SearchBar";

export default class UserInputLesson extends React.Component {
  state = { images: [] };

  onSearchgSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar onSubmit={this.onSearchgSubmit} />
        <h1>Found: {this.state.images.length} images</h1>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
