export const SIMPLE = "SIMPLE"
export const REQUIRED = "REQUIRED"


export const password: Validator = {
  type: SIMPLE,
  messageKey: "password",
  callback: (selfValue: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    return regex.test(selfValue)
  },
}

export const required: Validator = {
  type: REQUIRED,
  messageKey: "required",
  callback: (selfValue: any): boolean => {
    if(!selfValue) {
      return false
    }
    return !!selfValue.toString().length
  },
}

export const equals = (refName: string): Validator => ({
  type: SIMPLE,
  refName: refName,
  messageKey: "samePassword",
  callback: (selfValue: string, refValue): boolean => {
    return selfValue === refValue
  },
})
