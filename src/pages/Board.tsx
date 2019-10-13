import React, { useState, useRef } from "react";
import "../fonts/index.css";
import ImageUtil from "../utils/ImageUtil";
import Loading from "../components/Loading";
import { isAndroid, isChrome, isMobile } from "react-device-detect";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTextKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    const rows = text.split("\n").length;
    if (event.keyCode === 13 && rows >= maxRow) {
      event.preventDefault();
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    setIsLoading(true);
    ImageUtil.saveAsPng(targetRef, () => {
      setIsLoading(false);
    });
  };

  const kokubanImage =
    isChrome && (isAndroid || !isMobile)
      ? require("../images/kokuban.webp")
      : require("../images/kokuban.jpg");

  const whiteboardImage =
    isChrome && (isAndroid || !isMobile)
      ? require("../images/whiteboard.webp")
      : require("../images/whiteboard.jpg");

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
          height: `${type === "white" ? "500px" : "454px"}`,
          margin: "0",
          padding: `${type === "white" ? "20px 60px" : "15px 20px 20px"}`,
          boxSizing: "border-box"
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
            width: `${type === "white" ? "680px" : "750px"}`,
            height: `${type === "white" ? "250px" : "250px"}`,
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
      <Loading isLoading={isLoading} />
    </>
  );
};
