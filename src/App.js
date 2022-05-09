import "./App.css";
import React from "react";
import CompLessonIndex from "./componentsLesson/CompLessonIndex";
import SeasonsLessonIndex from "./seasonsLesson/SeasonsLessonIndex";
import UserInputLesson from "./userInputLesson/UserInputLesson";

const App = () => {
  return (
    <div>
      {/* <CompLessonIndex /> */}
      {/* <SeasonsLessonIndex /> */}
      <UserInputLesson />
    </div>
  );
};

export default App;
