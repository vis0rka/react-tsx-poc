import { useRef, useState } from "react"

const useRefState = (name: string, initialValue: any) => {
  const [value, setValue] = useState(initialValue)
  const ref = useRef({ name, value, setValue })
  ref.current.value = value
  return { value, setValue, ref }
}
export default useRefState
