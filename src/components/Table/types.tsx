import { Column as ReactTableColumn, Row, UseExpandedRowProps } from "react-table"

export interface Column<D extends object = {}> extends ReactTableColumn<D> {
  Filter?: Function
}

export type CellWithExpandedRow = { row: UseExpandedRowProps<Row> }

export const nameofFactory = <T extends unknown>() => (name: keyof T) => name
