import FramedLayout from "layouts/Framed";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import BasicData from "./basic-data";
import Timeline from "./timeline";
import Tabs from "components/Tabs";
import Tab from "components/Tabs/Tab";

type Params = { id: string };

const Fields = ({ match }: RouteComponentProps<Params>) => {
  return (
    <FramedLayout title="Id tábla">
      <Tabs match={match}>
        <Tab component={BasicData} relativPath="/basicdata" label="Alapadatok"></Tab>
        <Tab component={Timeline} relativPath="/timeline" label="Idővonal"></Tab>
      </Tabs>
    </FramedLayout>
  );
};

export default Fields;
