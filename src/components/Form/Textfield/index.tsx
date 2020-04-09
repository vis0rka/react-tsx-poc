import { Error, FormGroup, Input, Label } from "components/Form/StyledElements"
import { I18nContext } from "context/i18n"
import useRefState from "hooks/useRefState"
import i18nValidator from "i18n/Form/Validator"
import { default as React, useContext, useEffect } from "react"

type OwnProps = {
  name: string
  label: string
  errors?: any
  register?: Function
  validators?: Validators
  className?: string
  disabled?: boolean
}

const TextField = ({ name, label, errors, register, className, disabled }: OwnProps) => {
  const { value, setValue, ref } = useRefState(name, "")
  const { trl } = useContext(I18nContext)

  useEffect(() => {
    register && register(ref)
  }, [register, ref])

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="text"
        name={name}
        className={className + `${errors[name] ? " invalid" : ""}`}
        disabled={disabled}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {errors[name] && <Error>{trl(i18nValidator[errors[name]])}</Error>}
    </FormGroup>
  )
}

export default TextField
