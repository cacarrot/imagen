import React, { useState, useRef } from "react";
import "../fonts/index.css";
import ImageUtil from "../utils/ImageUtil";

const fontName = "game";

export default () => {
  const targetRef = useRef(null);

  const [status, setStatus] = useState<string>(
    "オルテガ\nＨＰ：９９９\nＭＰ：　　９\nゆうしゃ"
  );
  const [serif, setSerif] = useState<string>("ほげ");

  const handleStatusChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setStatus(event.target.value);
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
      <div ref={targetRef} style={styles.rootContainer}>
        {/* 上枠(ステータス)ここから */}
        <div ref={targetRef} style={styles.statusContainer}>
          <textarea
            value={status}
            onChange={handleStatusChange}
            style={Object.assign({}, styles.commonTa, styles.status)}
          />
          {/* 上枠ここまで */}
        </div>
        {/* 下枠(セリフ)ここから */}
        <div ref={targetRef} style={styles.serifContainer}>
          <textarea
            value={serif}
            onChange={handleSerifChange}
            style={Object.assign({}, styles.commonTa, styles.serif)}
          />
        </div>
        {/* 下枠(セリフ)ここまで */}
      </div>

      <input type="button" value="Save" onClick={handleSave} />
    </>
  );
};

type Styles = {
  [key: string]: React.CSSProperties;
};

const SIZE_ROOT_WIDTH = 512;
const SIZE_ROOT_HEIGHT = (SIZE_ROOT_WIDTH * 3) / 4;
const SIZE_FONT = 14;
const SIZE_LINE = 20;
const SIZE_PADDING = 10;

const styles: Styles = {
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: SIZE_ROOT_WIDTH,
    height: SIZE_ROOT_HEIGHT,
    boxSizing: "border-box",
    backgroundColor: "#000"
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: SIZE_ROOT_WIDTH,
    height: "50%",
    boxSizing: "border-box"
  },
  serifContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: SIZE_ROOT_WIDTH,
    height: "50%",
    boxSizing: "border-box"
  },
  commonTa: {
    boxSizing: "border-box",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: `${fontName}`,
    fontSize: SIZE_FONT,
    lineHeight: `${SIZE_LINE}px`,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: "10px",
    borderWidth: "3px",
    margin: "3px",
    padding: SIZE_PADDING,
    outline: "none",
    resize: "none"
  },
  status: {
    width: SIZE_ROOT_WIDTH / 4,
    height: `${SIZE_LINE * 4 + SIZE_PADDING * 2 + 10}px`
  },
  serif: {
    width: SIZE_ROOT_WIDTH,
    height: "90%",
    fontSize: SIZE_FONT
  }
};
