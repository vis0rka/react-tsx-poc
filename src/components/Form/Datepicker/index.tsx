import { Error, Label } from "components/Form/StyledElements"
import { I18nContext } from "context/i18n"
import useRefState from "hooks/useRefState"
import i18nValidator from "i18n/Form/Validator"
import { default as React, useContext, useEffect } from "react"
import DatePicker from "react-date-picker"
import Container from "./style"

type OwnProps = {
  name: string
  label: string
  type?: string
  errors?: any
  register?: Function
  validators?: Validators
  className?: string
  disabled?: boolean
}

const Datepicker = ({ name, label, errors, register, className, disabled }: OwnProps) => {
  const { trl } = useContext(I18nContext)
  const { value, setValue, ref } = useRefState(name, "")

  useEffect(() => {
    register && register(ref)
  }, [register, ref])

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <DatePicker
        onChange={date => setValue(date)}
        value={value ? new Date(value) : undefined}
        name={name}
        format="yyyy.MM.dd"
        locale="hu-HU"
        className={className + `${errors[name] ? " invalid" : ""}`}
        disabled={disabled}
      />
      {errors[name] && <Error>{trl(i18nValidator[errors[name]])}</Error>}
    </Container>
  )
}

export default Datepicker
