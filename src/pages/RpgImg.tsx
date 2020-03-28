import React, { useState, useRef } from "react";
import "../fonts/index.css";
import ImageUtil from "../utils/ImageUtil";

const fontName = "game";

export default () => {
  const targetRef = useRef(null);
  const [name, setName] = useState<string>("オルテガ");
  const [serif, setSerif] = useState<string>("ほげ");

  const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(event.target.value);
  };

  const handleSerifChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSerif(event.target.value);
  };

  const handleSave = () => {
    ImageUtil.saveAsPng(targetRef);
  };

  return (
    <>
      {/* 大枠 */}
      <div
        ref={targetRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "512px",
          height: "256px",
          boxSizing: "border-box",
          backgroundColor: "#000"
        }}
      >
        {/* 上枠ここから */}

        {/* 名前 */}
        <textarea
          value={name}
          onChange={handleNameChange}
          style={Object.assign({}, styles.commonTa, styles.name)}
        />
        {/* 職業 */}
        {/* 性別 */}
        {/* レベル */}
        {/* HP */}
        {/* MP */}
        {/* 上枠ここまで */}
        {/* 下枠(セリフ)ここから */}
        <textarea
          value={serif}
          onChange={handleSerifChange}
          style={Object.assign({}, styles.commonTa, styles.serif)}
        />
        {/* 下枠(セリフ)ここまで */}
      </div>

      <input type="button" value="Save" onClick={handleSave} />
    </>
  );
};

type Styles = {
  [key: string]: React.CSSProperties;
};

const styles: Styles = {
  commonTa: {
    boxSizing: "border-box",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: `${fontName}`,
    fontSize: "16px",
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: "10px",
    borderWidth: "3px",
    margin: "3px",
    padding: "13px",
    outline: "none",
    resize: "none"
  },
  name: {
    width: "25%",
    height: "40%"
  },
  serif: {
    width: "90%",
    height: "40%"
  }
};
