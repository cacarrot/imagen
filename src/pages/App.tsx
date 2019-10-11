import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SlackIcon from "./SlackIcon";
import WhiteBoard from "./WhiteBoard";

export default () => {
  return (
    <Tabs>
      <TabList>
        <Tab>ホワイトボード</Tab>
        <Tab>Slack Icon</Tab>
      </TabList>

      <TabPanel>
        <WhiteBoard />
      </TabPanel>
      <TabPanel>
        <SlackIcon />
      </TabPanel>
    </Tabs>
  );
};
