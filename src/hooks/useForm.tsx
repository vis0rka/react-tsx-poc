import React, { useCallback, useEffect, useRef, useState } from "react"

const isEmptyObject = (value: any): boolean => Object.entries(value).length === 0

const useForm = (defaultValues = {}) => {
  const [errors, setErrors] = useState({} as { [key: string]: any })
  const fieldsRef = useRef<FieldRefs<FormValues>>({})
  const [isSubmitting, setSubmitting] = useState(false)

  const getFieldValues = (fields: FormValues) => {
    return Object.values(fields).reduce<FormValues>(
      (previous, { ref: { name, value } }: Ref) => ({
        ...previous,
        [name]: value,
      }),
      {} as FormValues,
    )
  }

  const getFieldValueByName = (name: string) => fieldsRef.current[name]?.ref.value

  const validateFields = useCallback(async (fieldsRef: React.MutableRefObject<FieldRefs<FormValues>>): Promise<any> => {
    const fields = fieldsRef.current
    let errors: { [key: string]: any } = {}

    Object.keys(fields).forEach(field => {
      const { name, value } = fields[field]?.ref
      const { validators } = fields[field] as Field
      validators &&
        validators.every(validator => {
          const refValue = validator.refName ? getFieldValueByName(validator.refName) : null
          const result = validator.callback(value, refValue)
          !result && (errors[name] = validator.messageKey)
          return result
        })
    })

    return errors
  }, [])

  const handleSubmit = useCallback(
    (callback: OnSubmit<FormValues>) => async (e: React.BaseSyntheticEvent): Promise<void> => {
      if (e) {
        e.preventDefault()
        e.persist()
      }

      const errors = await validateFields(fieldsRef)
      setErrors(errors)
      if (isEmptyObject(errors)) {
        setSubmitting(true)
        await callback(getFieldValues(fieldsRef.current), e)
        setSubmitting(false)
      }
    },
    [validateFields],
  )

  useEffect(() => {
    Object.entries(defaultValues).forEach(([key, value]) => fieldsRef.current[key]?.ref.setValue(value))
  }, [defaultValues])

  const register = useCallback((ref: FieldRef, validationOption: Validators = [], type: string = "") => {
    if (!ref) {
      return
    }
    fieldsRef.current[ref.current.name as FieldName] = {
      ref: ref.current,
      validators: validationOption,
      type,
    }
  }, [])

  return { register, handleSubmit, errors, isSubmitting }
}

export default useForm
