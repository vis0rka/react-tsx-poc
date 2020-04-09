import { calc } from "plugins/math"
import React from "react"
import constants from "../constants"

const THead = ({ headerGroups }: any) => {
  return (
    <thead>
      {headerGroups.map((headerGroup: any, index: any) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <th {...column.getHeaderProps()} style={{ top: calc(`${index} * ${constants.trHeight}`) }}>
              <div className={`header cell${!column.Header ? " empty" : ""}${column.canFilter ? " filter" : ""}`}>
                <div {...column.getSortByToggleProps()} className="text">
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " ⮟" : " ⮝") : ""}
                </div>
                {column.canFilter && column.Header ? <div>{column.render("Filter")}</div> : null}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}

export default THead
