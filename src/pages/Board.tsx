import React, { useState, useRef } from "react";
import "../fonts/index.css";
import ImageUtil from "../utils/ImageUtil";
import whiteboardImage from "../images/whiteboard.png";
import kokubanImage from "../images/kokuban.png";

type Props = {
  type?: "white" | "black";
};

export default (props: Props = { type: "black" }) => {
  const { type } = props;
  const maxRow = type === "white" ? 10 : 8;
  const initialState = {
    text: `ほらね
  ・こんな
　・かんじで
　・かんたんに
　・リアルな
　・もじが

かけますよ。`
  };
  const targetRef = useRef(null);
  const [text, setText] = useState<string>(initialState.text);

  const handleTextKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    const rows = text.split("\n").length;
    if (event.keyCode == 13 && rows >= maxRow) {
      event.preventDefault();
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    ImageUtil.saveAsPng(targetRef);
  };

  return (
    <>
      <input type="button" value="Save" onClick={handleSave} />
      <div
        ref={targetRef}
        style={{
          fontFamily: "magic",
          backgroundImage: `url(${
            type === "white" ? whiteboardImage : kokubanImage
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          width: "800px",
          height: "500px",
          padding: `${type === "white" ? "20px 60px" : "20px 20px"}`
        }}
      >
        <textarea
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleTextKeyDown}
          style={{
            borderWidth: 0,
            outline: "none",
            resize: "none",
            width: "800px",
            height: "300px",
            fontFamily: `${type === "white" ? "magic" : "chalk"}`,
            fontSize: "30px",
            overflow: "hidden",
            fontWeight: "bold",
            backgroundColor: "transparent",
            color: `${type === "white" ? "#000" : "#fff"}`
          }}
          autoFocus
        />
      </div>
    </>
  );
};
