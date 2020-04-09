import React from "react";

type TabProps = {
  component: import("react").ReactNode;
  label: string;
  relativPath: string;
};

const Tab = (props: TabProps) => {
  return props && <div></div>;
};

export default Tab;