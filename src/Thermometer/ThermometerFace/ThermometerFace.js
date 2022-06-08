import React from "react";
import {
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiAngry,
  BsEmojiSmile,
  BsEmojiHeartEyes,
} from "react-icons/bs";
import { MOODS } from "../utils";
import "./ThermometerFace.css";

function ThermometerFace({ mood }) {
  switch (mood) {
    case MOODS[0]:
      return <BsEmojiAngry className="App-smiley" />;
    case MOODS[1]:
      return <BsEmojiFrown className="App-smiley" />;
    case MOODS[2]:
      return <BsEmojiNeutral className="App-smiley" />;
    case MOODS[3]:
      return <BsEmojiSmile className="App-smiley" />;
    case MOODS[4]:
      return <BsEmojiHeartEyes className="App-smiley" />;
    default:
      return <BsEmojiNeutral className="App-smiley" />;
  }
}

export default ThermometerFace;
