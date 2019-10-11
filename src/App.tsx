import React, { useState } from "react";
import fonts from "./fonts";
import "./fonts/index.css";

export default () => {
  const [text, setText] = useState<string>("こんちわ");
  const [fontName, setFontName] = useState("jido");
  const containerSize = 128;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <textarea value={text} onChange={handleTextChange} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${containerSize}px`,
          height: `${containerSize}px`,
          fontFamily: `${fontName}`,
          fontSize: `${fonts[fontName].fontSize}px`,
          lineHeight: `${fonts[fontName].fontSize}px`,
          borderWidth: `${fonts[fontName].borderWidth}px`,
          borderColor: `${fonts[fontName].borderColor}`,
          borderStyle: "solid",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        {text}
      </div>
    </>
  );
};
