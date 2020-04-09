import React, { useEffect, useState } from "react";
import FramedLayout from "layouts/Framed";
import CustomTimeline from "components/Timeline";
import { timelineApi } from "mock/timelineApi";
import LoaderOneDot from "components/LoaderOneDot";


const Timeline = () => {
  const [mockData, setMockdata] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (() => {
      timelineApi
        .apiTimelineFieldByFieldIdGet()
        .then(response => {
          setMockdata(response);
          setIsLoading(false)
        })
        .catch(error => {
          console.log(error)
        });
    })();
  }, []);

  return (
    <FramedLayout title="Idővonal">
      {isLoading ? <LoaderOneDot /> : [<CustomTimeline fieldName="Répa tábla" timelineData={mockData} />, <CustomTimeline fieldName="Kukorica tábla" timelineData={mockData} />]}
    </FramedLayout>
  );
};

export default Timeline;
