import { REQUIRED } from "components/Form/validators"
import useFormHook from "hooks/useForm"
import React from "react"

type OwnProps = {
  children: Array<React.ReactElement> | React.ReactElement
  onSubmit: any
  initalState?: any
}

export default function Form({ children, onSubmit, initalState }: OwnProps) {
  const { register, handleSubmit, errors, isSubmitting } = useFormHook(initalState)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    key: child.props.name,
                    className:
                      child.props.validators && child.props.validators.find((el: any) => el.type === REQUIRED)
                        ? "required"
                        : " ",
                    disabled: isSubmitting,
                  },
                  errors: errors,
                  register: (ref: FieldRef) => register(ref, child.props.validators as Validators, child.props.type),
                })
              : React.createElement(child.type, {
                  ...{
                    ...child.props,
                    key: child.props.type,
                    disabled: isSubmitting,
                  },
                })
          })
        : children}
    </form>
  )
}
