import { css } from "styled-components"
import colors from "theme/colors"

export const required = css`
  border-left: 2px solid ${colors.orange};
`

export const invalid = css`
  border-left: 2px solid ${colors.red};
`
