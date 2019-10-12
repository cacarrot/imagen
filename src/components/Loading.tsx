import React from "react";
import "./Loading.css";

type Props = {
  isLoading?: boolean;
};
export default (props: Props = { isLoading: false }) => {
  const { isLoading } = props;
  if (isLoading) {
    return (
      <div className="popup">
        <div className="cssload-tetrominos">
          <div className="cssload-tetromino cssload-box1"></div>
          <div className="cssload-tetromino cssload-box2"></div>
          <div className="cssload-tetromino cssload-box3"></div>
          <div className="cssload-tetromino cssload-box4"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
