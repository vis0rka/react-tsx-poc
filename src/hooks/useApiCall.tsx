import toastr from "plugins/toastify"
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react"

export const useApiCall = <Fn extends (...args: any[]) => any>(argObj: {
  apiCall: Fn
  args?: Parameters<Fn>
  runOnInit?: boolean
}): [Required<GenericArgOf<ReturnType<Fn>>>, boolean, MutableRefObject<Messages>, Function] => {
  const argObjRef = useRef(argObj)
  const messageObj = useRef<Messages>({})
  const [data, setData] = useState<GenericArgOf<ReturnType<Fn>>>(null as GenericArgOf<ReturnType<Fn>>)
  const runAfterInit = typeof argObjRef.current.runOnInit === "undefined" || argObjRef.current.runOnInit
  const [isLoading, setLoading] = useState(runAfterInit)
  const isMounted = useRef(true)

  const doFetch = useCallback((newArgs?: Parameters<Fn>) => {
    if (!isMounted.current) return
    setLoading(true)
    const { apiCall, args } = argObjRef.current
    return apiCall(...(newArgs || args || []))
      .then((response: GenericArgOf<ReturnType<Fn>>) => {
        if (!isMounted.current) return
        messageObj?.current?.[200] && toastr.success(messageObj?.current?.[200])
        setData(response)
      })
      .catch((error: any) => {
        if (!isMounted.current) return
        toastr.error(
          messageObj?.current?.[error.status] || messageObj?.current?.default || "Adatok lekérdezése sikertelen!",
        )
      })
      .finally(() => {
        if (!isMounted.current) return
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (runAfterInit) {
      doFetch()
    }
    return () => {
      isMounted.current = false
    }
  }, [doFetch, runAfterInit])

  return [data, isLoading, messageObj, doFetch]
}
