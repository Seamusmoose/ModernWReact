import React from "react";

class SearchBar extends React.Component {
  state = { textInput: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.textInput);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={(event) =>
                this.setState({ textInput: event.target.value })
              }
              value={this.state.textInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
