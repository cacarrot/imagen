import React, { useState, useRef } from "react";
import fonts from "../fonts";
import "../fonts/index.css";
import ImageUtil from "../utils/ImageUtil";

export default () => {
  const targetRef = useRef(null);
  const [text, setText] = useState<string>("こんちわ");
  const [fontName, setFontName] = useState("game");
  const containerSize = 128;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFontName(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    ImageUtil.saveAsPng(targetRef);
  };

  const displaySelectOptions = () => {
    let fontArray = [];
    for (const key in fonts) {
      if (fonts.hasOwnProperty(key)) {
        fontArray.push(Object.assign({}, fonts[key], { name: key }));
      }
    }
    return fontArray.map(item => {
      return <option value={item.name}>{item.title}</option>;
    });
  };

  const currentFont = fonts[fontName];

  return (
    <>
      <div>
        <input type="text" value={text} onChange={handleTextChange} />
        <select onChange={handleSelectChange}>{displaySelectOptions()}</select>
      </div>
      <div
        ref={targetRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${containerSize}px`,
          height: `${containerSize}px`,
          padding: `${currentFont.padding}px`,
          fontFamily: `${fontName}`,
          fontSize: `${currentFont.fontSize}px`,
          lineHeight: `${currentFont.fontSize}px`,
          borderWidth: `${currentFont.borderWidth}px`,
          borderColor: `${currentFont.borderColor}`,
          backgroundColor: `${currentFont.backgroundColor}`,
          color: `${currentFont.color}`,
          borderStyle: "solid",
          borderRadius: "20px",
          overflow: "hidden",
          boxSizing: "border-box"
        }}
      >
        {text}
      </div>
      <input type="button" value="Save" onClick={handleSave} />
    </>
  );
};
