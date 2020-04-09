import Table from "components/Table"
import { Column, nameofFactory } from "components/Table/types"
import { I18nContext } from "context/i18n"
import { useApiCall } from "hooks/useApiCall"
import i18nCommon from "i18n/Common"
import i18nTable from "i18n/Table"
import FramedLayout from "layouts/Framed"
import { tableApi, TableResponse } from "mock/tableApi"
import React, { useCallback, useContext, useEffect, useMemo } from "react"
import { NavLink } from "react-router-dom"
import { Row } from "react-table"

const TablePage = () => {
  const nameof = useCallback(nameofFactory<TableResponse>(), [])
  const { trl } = useContext(I18nContext)

  const columns: Array<Column> = useMemo(
    () => [
      {
        Header: trl(i18nTable.headerGroups.table),
        columns: [
          {
            Header: trl(i18nTable.headerGroups.name),
            columns: [
              { Header: trl(i18nTable.name.first), accessor: nameof("firstName") },
              { Header: trl(i18nTable.name.last), accessor: nameof("lastName") },
            ],
          },
          {
            Header: trl(i18nTable.headerGroups.info),
            columns: [
              { Header: trl(i18nTable.age), accessor: nameof("age") },
              { Header: trl(i18nTable.visits), accessor: nameof("visits") },
              { Header: trl(i18nTable.email), accessor: nameof("email") },
              { Header: trl(i18nTable.status), accessor: nameof("status") },
              { Header: trl(i18nTable.progress), accessor: nameof("progress") },
              {
                Header: trl(i18nTable.isActive),
                accessor: nameof("isActive"),
                Cell: (props: any) => (
                  <div className="boolean">
                    +<span className="boolean">{props.cell.value}</span>+
                  </div>
                ),
              },
              {
                Header: "",
                accessor: nameof("uuid"),
                Cell: (props: any) => (
                  <NavLink activeClassName="active" to={"/table/" + props.cell.value}>
                    <i className="fa fa-share"></i>
                  </NavLink>
                ),
              },
            ],
          },
        ],
      },
    ],
    [nameof, trl],
  )

  const renderRowSubComponent = useCallback(
    (row: Row) => (
      <pre
        style={{
          fontSize: "10px",
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    [],
  )

  const [data, isLoading, messages, getAgainTheTable] = useApiCall({
    apiCall: tableApi.apiGet,
    args: [404],
  })
  messages.current = {
    "200": trl(i18nTable.messages.success),
    "404": trl(i18nTable.messages._404),
    default: trl(i18nTable.messages.default),
  }

  const formatter = useCallback(
    (row: TableResponse) => ({
      ...row,
      isActive: row.isActive ? `-${trl(i18nCommon.yes)}-` : `-${trl(i18nCommon.no)}-`,
      lastName: "Mr. " + row.lastName,
      age: row.age + " years",
    }),
    [trl],
  )

  useEffect(() => {
    setTimeout(() => {
      getAgainTheTable([200])
      getAgainTheTable()
      getAgainTheTable([403])
      getAgainTheTable([200])
    }, 2500)
  }, [getAgainTheTable])

  return (
    <FramedLayout title="Table">
      <Table {...{ columns, renderRowSubComponent, data, isLoading, formatter }} />
    </FramedLayout>
  )
}

export default TablePage
