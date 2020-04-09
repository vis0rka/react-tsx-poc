import React, { Fragment } from "react"

const TBody = ({ page, getTableBodyProps, prepareRow, flatColumns, renderRowSubComponent }: any) => {
  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row: any) => {
        prepareRow(row)
        return (
          <Fragment key={row.index}>
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return (
                  <td {...cell.getCellProps()}>
                    <div className="body cell">{cell.render("Cell")}</div>
                  </td>
                )
              })}
            </tr>
            {row.isExpanded ? (
              <tr>
                <td colSpan={flatColumns.length}>{renderRowSubComponent(row)}</td>
              </tr>
            ) : null}
          </Fragment>
        )
      })}
    </tbody>
  )
}

export default TBody
