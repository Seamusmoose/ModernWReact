import React from "react";
import './SeasonDisplay.css'

const SeasonConfig = {
  summer: {
    text: "let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "it's chilly",
    iconName: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({latitude}) => {
  const season = getSeason(latitude, new Date().getMonth());
  const {text, iconName} = SeasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

// class SeasonDisplay extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {latitude: null}
//   }

//   componentDidMount(props) {
//     const season = getSeason(props.latitude, new Date().getMonth());
//     return season;
//   }

//   render() {
//    console.log(latitude)

//     return <div></div>;
//   }
// }

export default SeasonDisplay;
