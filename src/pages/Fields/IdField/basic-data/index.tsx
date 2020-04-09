import React from "react";
import { RouteComponentProps } from "react-router-dom";

type TParams = { fieldId: string };

const BasicData = ({ match }: RouteComponentProps<TParams>) => {
  return <h1>alapadatok tábla id {match.params.fieldId}</h1>
};

export default BasicData;