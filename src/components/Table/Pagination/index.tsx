import React from "react"
import styled from "styled-components"

const Pagination = ({
  page,
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
}: any) => {
  const gotoFirstPage = () => gotoPage(0)
  const gotoLastPage = () => gotoPage(pageCount - 1)

  return page.length !== 0 ? (
    <Div className="pagination">
      <Button onClick={gotoFirstPage} disabled={!canPreviousPage} text={"⮜⮜"} />
      <Button onClick={previousPage} disabled={!canPreviousPage} text={"⮜"} />
      <Button onClick={nextPage} disabled={!canNextPage} text={"⮞"} />
      <Button onClick={gotoLastPage} disabled={!canNextPage} text={"⮞⮞"} />
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <input
          type="number"
          value={pageIndex + 1}
          min="1"
          max={pageOptions.length}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
      <select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </Div>
  ) : null
}

const Button = ({ onClick, disabled, text }: any) => (
  <button onClick={() => onClick()} disabled={disabled}>
    {text}
  </button>
)

const Div = styled.div`
  padding: 0.5rem;

  input {
    display: initial;
    padding: 0;
  }
  select {
    display: initial;
    width: initial;
  }
`

export default Pagination
