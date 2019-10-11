import React, { useState, useRef } from "react";
import "../fonts/index.css";
import ImageUtil from "../utils/ImageUtil";
import whiteboardImage from "../images/whiteboard.png";

export default () => {
  const targetRef = useRef(null);
  const [text, setText] = useState<string>("ホワイトボード");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    ImageUtil.saveAsPng(targetRef);
  };

  const fontSize = 24;

  return (
    <>
      <input type="button" value="Save" onClick={handleSave} />
      <div
        ref={targetRef}
        style={{
          fontFamily: "magic",
          backgroundImage: `url(${whiteboardImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          width: "700px",
          height: "300px",
          padding: "20px 50px"
        }}
      >
        <textarea
          value={text}
          onChange={handleTextChange}
          style={{
            borderWidth: 0,
            outline: "none",
            resize: "none",
            width: "700px",
            height: "250px",
            fontFamily: "magic",
            fontSize: `${fontSize}px`,
            overflow: "hidden"
          }}
          autoFocus
        />
      </div>
    </>
  );
};
