import { Error, FormGroup, Input, Label, Select, SelectContainer, SelectWrapper } from "components/Form/StyledElements"
import { I18nContext } from "context/i18n"
import i18nValidator from "i18n/Form/Validator"
import React, { useContext, useEffect, useMemo, useRef, useState } from "react"

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

const Phonefield = ({ name, label, errors, disabled, register, className }: OwnProps) => {
  const { trl } = useContext(I18nContext)

  const DEFAULT_PREFIX = useMemo(() => "+36", [])

  const [prefix, setPrefix] = useState(DEFAULT_PREFIX)
  const [number, setNumber] = useState("")

  const setValue = (value: string) => {
    let splittedValue = value.split(" ") || [DEFAULT_PREFIX, ""]
    setPrefix(splittedValue[0])
    setNumber(splittedValue[1])
  }

  const ref = useRef({
    name,
    value: prefix + " " + number,
    setValue,
  })
  ref.current.value = prefix + " " + number

  useEffect(() => {
    register && register(ref)
  }, [register, ref])

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <SelectContainer className={className}>
        <SelectWrapper>
          <Select name="prefix" onChange={e => setPrefix(e.target.value)} disabled={disabled} value={prefix}>
            <option value={DEFAULT_PREFIX}>{DEFAULT_PREFIX}</option>
            <option value="+99">+99</option>
          </Select>
        </SelectWrapper>
        <Input type="text" name="number" value={number} onChange={e => setNumber(e.target.value)} disabled={disabled} />
        {errors[name] && <Error>{trl(i18nValidator[errors[name]])}</Error>}
      </SelectContainer>
    </FormGroup>
  )
}

export default Phonefield
