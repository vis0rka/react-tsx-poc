import { CellWithExpandedRow, Column } from "components/Table/types"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Row, useExpanded, useFilters, usePagination, useSortBy, useTable } from "react-table"
import NoData from "./NoData"
import Pagination from "./Pagination"
import Styles from "./styles"
import TBody from "./TBody"
import THead from "./THead"

type OwnProps = {
  columns: Array<Column>
  data: Array<object>
  isLoading: boolean
  formatter?: Function
  renderRowSubComponent?: (row: Row) => JSX.Element
}

const Table = ({ columns, data, isLoading, renderRowSubComponent, formatter }: OwnProps) => {
  const dataToFormat = useMemo(() => data || [], [data])
  const addExpander = useCallback((columns: any[], renderRowSubComponent: any) => {
    renderRowSubComponent &&
      columns.unshift({
        Header: () => null,
        id: "expander",
        Cell: ({ row }: CellWithExpandedRow) => (
          <span {...row.getExpandedToggleProps()} className="expandable" title="expand">
            {row.isExpanded ? "⮟" : "⮞"}
          </span>
        ),
      })
    return columns
  }, [])

  /* prettier-ignore */
  const expandedColumns = useMemo(() => addExpander(columns, renderRowSubComponent), [
    addExpander, columns, renderRowSubComponent,
  ])

  const Filter = useCallback(
    ({ column: { filterValue, setFilter } }: any) => (
      <input value={filterValue || ""} onChange={e => setFilter(e.target.value || undefined)} />
    ),
    [],
  )

  const defaultColumn: Column = useMemo(() => ({ Filter }), [Filter])
  const [formatedData, setFormatedData] = useState(dataToFormat)

  useEffect(() => {
    setFormatedData(formatter ? dataToFormat.map(row => formatter(row)) : dataToFormat)
  }, [dataToFormat, formatter])

  /* prettier-ignore */
  const {
    getTableProps, getTableBodyProps, headerGroups, flatColumns, prepareRow, page, canPreviousPage, 
    canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, 
    state: { pageIndex, pageSize },
  }: any = useTable(
    {
      columns: expandedColumns,
      data : formatedData,
      defaultColumn,
      initialState: { pageIndex: 0 },
    },
    useFilters, useSortBy, useExpanded, usePagination,
  )

  return (
    <Styles>
      <div className="table-wrapper">
        <table {...getTableProps()}>
          <THead {...{ headerGroups }} />
          <TBody {...{ page, getTableBodyProps, prepareRow, flatColumns, renderRowSubComponent }} />
          <NoData {...{ page, flatColumns, isLoading }} />
        </table>
      </div>
      {/* prettier-ignore */}
      <Pagination
        {...{
          page, gotoPage, canPreviousPage, previousPage, nextPage, canNextPage, 
          pageCount, pageIndex, pageOptions, pageSize, setPageSize,
        }}
      />
    </Styles>
  )
}

export default Table
