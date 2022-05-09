import "./App.css";
import React from "react";
import CompLessonIndex from "./componentsLesson/CompLessonIndex";
import SeasonsLessonIndex from "./seasonsLesson/SeasonsLessonIndex";
import UserInputLesson from "./userInputLesson/UserInputLesson";
import YoutubeHome from "./youtubeComponent/YoutubeHome";

const App = () => {
  return (
    <div>
      {/* <CompLessonIndex /> */}
      {/* <SeasonsLessonIndex /> */}
      {/* <UserInputLesson /> */}
      <YoutubeHome />
    </div>
  );
};

export default App;
