import FramedLayout from "layouts/Framed";
import React from "react";
import Inaktiv from "./Inaktiv";
import Aktiv from "./Aktiv";
import Tabs from "components/Tabs";
import Tab from "components/Tabs/Tab";
import { RouteComponentProps } from "react-router-dom";

const Fields = ({ match }: RouteComponentProps) => {
  return (
    <FramedLayout title="Tábla lista">
      <Tabs match={match}>
        <Tab component={Aktiv} relativPath="/aktiv" label="Aktív"></Tab>
        <Tab component={Inaktiv} relativPath="/inaktiv" label="Inaktív"></Tab>
      </Tabs>
    </FramedLayout>
  );
};

export default Fields;
