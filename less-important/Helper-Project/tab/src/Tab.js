import React, { useState } from "react";

import "./tab.css";

const Tab = () => {
  const [content1, setContent1] = useState(true);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  const tab1 = () => {
    setContent1(true);
    setContent2(false);
    setContent3(false);
  };
  const tab2 = () => {
    setContent1(false);
    setContent2(true);
    setContent3(false);
  };
  const tab3 = () => {
    setContent1(false);
    setContent2(false);
    setContent3(true);
  };
  return (
    <div className="tab">
      <div className="tab-btn-list">
        <button onClick={tab1} className={`btn ${content1 ? "active" : ""}`}>
          tab1
        </button>
        <button onClick={tab2} className={`btn ${content2 ? "active" : ""}`}>
          tab2
        </button>
        <button onClick={tab3} className={`btn ${content3 ? "active" : ""}`}>
          tab3
        </button>
      </div>
      <div className="tab-content-box">
        {content1 && (
          <div className="content">
            <h2>content 1:</h2>
            <p>This is content 1</p>
          </div>
        )}
        {content2 && (
          <div className="content">
            <h2>content 2 :</h2>
            <p>This is content 2</p>
          </div>
        )}
        {content3 && (
          <div className="content">
            <h2>content 3 :</h2>
            <p>This is Content 3</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
