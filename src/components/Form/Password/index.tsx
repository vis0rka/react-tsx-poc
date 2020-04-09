import { Error, FormGroup, Input, Label } from "components/Form/StyledElements"
import { I18nContext } from "context/i18n"
import useRefState from "hooks/useRefState"
import i18nValidator from "i18n/Form/Validator"
import { default as React, useContext, useEffect, useState } from "react"
import styled from "styled-components"
import colors from "theme/colors"

type OwnProps = {
  name: string
  label: string
  errors?: any
  register?: Function
  validators?: Validators
  className?: string
  disabled?: boolean
}

const PasswordField = ({ name, label, errors, register, className, disabled }: OwnProps) => {
  const [isShown, setIsShown] = useState(false)
  const { trl } = useContext(I18nContext)
  const { value, setValue, ref } = useRefState(name, "")

  useEffect(() => {
    register && register(ref)
  }, [register, ref])

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={isShown ? "text" : "password"}
        name={name}
        className={className + `${errors[name] ? " invalid" : ""}`}
        disabled={disabled}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {errors[name] && <Error>{trl(i18nValidator[errors[name]])}</Error>}
      <IEYE className={`fas fa-eye` + (isShown ? "-slash" : "")} onClick={() => setIsShown(!isShown)}></IEYE>
    </FormGroup>
  )
}

const IEYE = styled.i`
  margin-right: 10px;
  margin-top: -27px;
  color: ${colors.greenDark};
  cursor: pointer;
  position: absolute;
  right: 0;
`

export default PasswordField
