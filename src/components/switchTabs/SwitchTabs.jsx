import React, { useState } from "react";
import "./style.scss";
import { Await } from "react-router-dom";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = async(tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 100);
    await onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => {
          return(
            <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={()=> activeTab(tab, index)}
          >
            {tab}
          </span>
          )
        })}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
