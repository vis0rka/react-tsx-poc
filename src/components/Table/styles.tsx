import { calc } from "plugins/math"
import styled from "styled-components"
import constants from "./constants"

export default styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .table-wrapper {
    max-height: 100%;
    overflow: auto;
    border: 1px solid black;

    table {
      position: relative;
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;

      tr {
        :last-child {
          td:before {
            border-bottom: 0;
          }
        }

        th {
          background-color: ${constants.backgroundColor};
          position: sticky;
          vertical-align: bottom;
          z-index: 1;

          .filter .text {
            padding-bottom: ${calc(constants.cellPadding + " / 2")};
          }

          :before {
            content: "";
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            position: absolute;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            z-index: -1;
          }

          .header.cell {
            input {
              height: ${constants.headerInputHeight};
              max-width: fit-content;
              margin: auto;
              padding: 0 2px;
            }
            &.empty:after {
              content: "-";
              color: ${constants.backgroundColor};
            }
          }
        }

        td {
          position: relative;
          :before {
            content: "";
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            position: absolute;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            z-index: -1;
          }
          .cell {
            i {
              font-size: 0.9rem;
            }

            span.expandable {
              display: block;
              width: 100%;
              text-align: center;
              line-height: ${calc(constants.trHeight + " / 7 * 4")};
            }
          }
        }

        th,
        td {
          margin: 0;
          padding: 0;

          :last-child:before {
            border-right: 0;
          }

          .cell {
            min-height: ${constants.trHeight};
            padding: ${constants.cellPadding};
          }
        }
      }
    }
  }
`
