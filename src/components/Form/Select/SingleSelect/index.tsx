import { Error, Label } from "components/Form/StyledElements"
import { I18nContext } from "context/i18n"
import useRefState from "hooks/useRefState"
import i18nForm from "i18n/Form"
import i18nValidator from "i18n/Form/Validator"
import React, { useCallback, useContext, useEffect } from "react"
import Select from "react-select"
import { OptionsType, ValueType } from "react-select/src/types"
import { SelectFormGroup } from "../style"

type Option = {
  label: string
  value: string
}

type OwnProps = {
  options: OptionsType<Option>
  name: string
  label: string
  errors?: any
  register?: Function
  validators?: Validators
  className?: string
  disabled?: boolean
}

const SingleSelect = ({ options, label, name, disabled, errors, className, register }: OwnProps) => {
  const { value, setValue, ref } = useRefState(name, "")
  const { trl } = useContext(I18nContext)

  const getValue = useCallback((): ValueType<Option> => {
    return options ? options.find(option => option.value === value) : ({} as Option)
  }, [options, value])

  useEffect(() => {
    register && register(ref)
  }, [register, ref])

  return (
    <SelectFormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Select
        placeholder={trl(i18nForm.pleaseChoose)}
        instanceId={name}
        name={name}
        value={getValue()}
        onChange={option => setValue((option as Option).value)}
        options={options}
        noOptionsMessage={() => trl(i18nForm.noOption)}
        classNamePrefix="react-select"
        className={className + `${errors[name] ? " invalid" : ""}`}
        isDisabled={disabled}
        closeMenuOnSelect
      />
      {errors[name] && <Error>{trl(i18nValidator[errors[name]])}</Error>}
    </SelectFormGroup>
  )
}

export default SingleSelect
