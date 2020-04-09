import { I18nContext } from "context/i18n"
import i18nCommon from "i18n/Common"
import React, { useContext } from "react"
import styled from "styled-components"
import constants from "../constants"

const NoData = ({ flatColumns, page, isLoading }: any) => {
  const { trl } = useContext(I18nContext)

  return page.length === 0 ? (
    <tfoot>
      <tr>
        <td colSpan={flatColumns.length}>
          <NoDataDiv className="no-data">{isLoading ? trl(i18nCommon.loading) : trl(i18nCommon.noData)}</NoDataDiv>
        </td>
      </tr>
    </tfoot>
  ) : null
}

const NoDataDiv = styled.div`
  height: ${constants.trHeight};
  margin: 0;
  padding: ${constants.cellPadding};
  text-align: center;
`

export default NoData
