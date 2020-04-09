import React from "react";
import styled from "styled-components";
import "../../../node_modules/vis/dist/vis.min.css";
import { jobTypesTranslation, Options } from "./timelinehelper";
import Timeline from "react-visjs-timeline";
import { TimelineViewModel } from "mock/timelineApi";
import "moment/locale/hu";

type timelineProps = {
  fieldName: string;
  timelineData: Array<TimelineViewModel>;
};

const TimelineComponents = (props: timelineProps) => {
  const Items = props.timelineData.map((item, idx) => {
    if (item.type === 0) {
      return {
        id: idx,
        content: jobTypesTranslation[item.subType],
        start: new Date(item.date),
        className: "businessevent"
      };
    } else {
      return {
        id: idx,
        content: jobTypesTranslation[item.subType],
        start: new Date(item.date),
        title: item.comment,
        className: `${item.comment ? "farmingoperation withcomment" : "farmingoperation"}`
      };
    }
  });
  return (
    <TimelineDiv>
      <H2>{props.fieldName}</H2>
      <Timeline options={Options} items={Items} />
    </TimelineDiv>
  );
};

const H2 = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
`;

const TimelineDiv = styled.div`
  margin-top: 20px;
  .vis-timeline {
    border-color: #ddd;
    border-style: solid;
    border-width: 0 0 1px 0;
  }

  .vis-time-axis .vis-grid.vis-major {
    border-color: rgba(0, 0, 0, 0.2);
  }

  .vis-time-axis .vis-grid.vis-minor {
    border-color: rgba(0, 0, 0, 0.04);
  }

  .vis-text > div {
    color: rgba(0, 0, 0, 0.3);
  }

  .vis-text.vis-major {
    bottom: 0px;
  }

  .vis-text {
    font-size: 12px;
  }

  .vis-text.vis-saturday,
  .vis-text.vis-sunday {
    color: rgba(0, 0, 0, 0.3);
  }

  .vis-item.vis-box {
    color: #fff;
    border: 0;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
  }

  .vis-item.businessevent {
    background-color: green;
  }

  .vis-item.farmingoperation {
    background-color: red;

    &.withcomment:after {
      font-weight: 900;
      font-family: "Font Awesome 5 Free";
      content: "\f0e0";
      color: black;
      font-size: 12px;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 100;
      transform: translateY(-25%) translateX(25%);
    }
  }

  .vis-item .vis-item-overflow {
    cursor: move;
  }

  .vis-drag-left,
  .vis-drag-right {
    cursor: col-resize;
  }

  .vis-item .vis-item-content {
    left: 0px;
    right: 0px;
    padding: 3px 10px;
    margin: 0;
    text-align: center;
    overflow: hidden;
    width: 100%;
  }

  .vis-vertical-scroll {
    display: none;
  }

  .vis-item.vis-line,
  .vis-item.vis-dot {
    display: none;
  }
`;
export default TimelineComponents;
