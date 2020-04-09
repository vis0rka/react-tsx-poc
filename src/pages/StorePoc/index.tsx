import Counter from "components/Counter";
import Display from "components/Display";
import FramedLayout from "layouts/Framed";
import React from "react";

const StorePoc = () => {
  return (
    <FramedLayout title="Redux">
      <Counter title="CounterTitle" />
      <Display />
    </FramedLayout>
  );
};

export default StorePoc;
