import React, { useState, useRef } from "react";
import "../fonts/index.css";
import ImageUtil from "../utils/ImageUtil";
import whiteboardImage from "../images/whiteboard.png";

export default () => {
  const initialState = {
    text: `ホワイトボード
　・こんな
　・感じで
　・記載できますよ`
  };
  const targetRef = useRef(null);
  const [text, setText] = useState<string>(initialState.text);

  const handleTextKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    const rows = text.split("\n").length;
    if (event.keyCode == 13 && rows >= 8) {
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
          onKeyDown={handleTextKeyDown}
          style={{
            borderWidth: 0,
            outline: "none",
            resize: "none",
            width: "700px",
            height: "240px",
            fontFamily: "magic",
            fontSize: "30px",
            overflow: "hidden",
            fontWeight: "bold"
          }}
          autoFocus
        />
      </div>
    </>
  );
};
