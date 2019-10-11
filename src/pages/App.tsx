import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SlackIcon from "./SlackIcon";
import Board from "./Board";

export default () => {
  return (
    <Tabs>
      <TabList>
        <Tab>黒板</Tab>
        <Tab>ホワイトボード</Tab>
        <Tab>Slack Icon</Tab>
      </TabList>

      <TabPanel>
        <Board type="black" />
      </TabPanel>
      <TabPanel>
        <Board type="white" />
      </TabPanel>
      <TabPanel>
        <SlackIcon />
      </TabPanel>
    </Tabs>
  );
};
