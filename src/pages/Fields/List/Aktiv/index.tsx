import React from "react";
import { NavLink } from "react-router-dom";

const fieldId = [1234, 12512, 55123, 54123213];

const Aktiv = () => {
  return (
    <div>
      {fieldId.map(fieldId => {
        return (
          <NavLink key={fieldId} to={`/fields/${fieldId}/basicdata`}>
            <button>Tábla{fieldId}</button>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Aktiv;
