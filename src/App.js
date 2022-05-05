import "./App.css";
import React from "react";
import CommentDetail from "./componentsLesson/CommentDetail.jsx";
import faker from "faker";
import ApprovalCard from "./componentsLesson/ApprovalCard";
import SeasonDisplay from "./seasonsLesson/SeasonDisplay";
import Spinner from "./seasonsLesson/Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: "", errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // componentDidUpdate() {
  //   console.log('my componenet just updated, it re-rendered')
  // }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return <Spinner message="Please accept location request"/>;
  }
}

export default App;

// components lesson:
// <div>
//   <ApprovalCard>
//     <CommentDetail
//       text="this"
//       image={faker.image.image()}
//       time="yesterday 5pm"
//       author="peter"
//     />
//   </ApprovalCard>
//   <ApprovalCard>
//     <CommentDetail
//       text="is a"
//       image={faker.image.image()}
//       time="today 5pm"
//       author="sam"
//     />
//   </ApprovalCard>
//   <ApprovalCard>
//     <CommentDetail
//       text="test"
//       image={faker.image.image()}
//       time="yesterday 10pm"
//       author="laura"
//     />
//   </ApprovalCard>
// </div>
