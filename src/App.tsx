import React, { useState, useRef } from "react";
import fonts from "./fonts";
import "./fonts/index.css";
import ImageUtil from "./utils/ImageUtil";

export default () => {
  const targetRef = useRef(null);
  const [text, setText] = useState<string>("こんちわ");
  const [fontName, setFontName] = useState("game");
  const containerSize = 128;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    ImageUtil.saveAsPng(targetRef);
  };

  return (
    <>
      <textarea value={text} onChange={handleTextChange} />
      <div
        ref={targetRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${containerSize}px`,
          height: `${containerSize}px`,
          padding: `${fonts[fontName].padding}px`,
          fontFamily: `${fontName}`,
          fontSize: `${fonts[fontName].fontSize}px`,
          lineHeight: `${fonts[fontName].fontSize}px`,
          borderWidth: `${fonts[fontName].borderWidth}px`,
          borderColor: `${fonts[fontName].borderColor}`,
          backgroundColor: `${fonts[fontName].backgroundColor}`,
          color: `${fonts[fontName].color}`,
          borderStyle: "solid",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        {text}
      </div>
      <input type="button" value="Save" onClick={handleSave} />
    </>
  );
};
