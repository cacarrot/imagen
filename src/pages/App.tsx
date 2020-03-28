import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Board from "./Board";
import RpgImg from "./RpgImg";
import SlackIcon from "./SlackIcon";
import packageJson from "../../package.json";

export default () => {
  const tabs = [
    { title: "RPG風画像", component: <RpgImg /> },
    { title: "Slackアイコン", component: <SlackIcon /> },
    { title: "黒板", component: <Board type="black" /> },
    { title: "ホワイトボード", component: <Board type="white" /> },
    { title: "Info", component: <div>バージョン：{packageJson.version}</div> }
  ];
  const dispTabList = () => {
    const _children: JSX.Element[] = [];
    tabs.forEach((item, index) => {
      _children.push(<Tab key={`tab-${index}`}>{item.title}</Tab>);
    });
    return <TabList>{_children}</TabList>;
  };
  const dispTabPanels = () => {
    const _children: JSX.Element[] = [];
    tabs.forEach((item, index) => {
      _children.push(
        <TabPanel key={`panel-${index}`}>{item.component}</TabPanel>
      );
    });
    return _children;
  };
  return (
    <Tabs>
      {dispTabList()}
      {dispTabPanels()}
    </Tabs>
  );
};
