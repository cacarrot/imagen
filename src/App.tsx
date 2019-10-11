import React, { useState, useRef } from "react";
import fonts from "./fonts";
import "./fonts/index.css";
import domtoimage from "dom-to-image";

export default () => {
  const outRef = useRef(null);
  const [text, setText] = useState<string>("こんちわ");
  const [fontName, setFontName] = useState("game");
  const containerSize = 128;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const node = outRef.current;
    if (node === null) return;
    domtoimage
      .toPng(node)
      .then(function(dataUrl) {
        var link = document.createElement("a");
        link.download = "image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(function(error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <>
      <textarea value={text} onChange={handleTextChange} />
      <div
        ref={outRef}
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
