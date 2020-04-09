import React, { useCallback, useState } from "react"

export type I18nContextType = {
  lang: Languages
  trl: Function
  setLang: Function
}

const LANG_KEY = "lang"
const supportedLangs = ["hu", "en"] as const
declare type Languages = TypeOfArray<typeof supportedLangs>
const defaultLang: Languages = "hu"

export const I18nContext = React.createContext<I18nContextType>({} as I18nContextType)

export const I18nContextProvider = (props: ContextProviderProps) => {
  const [lang, setLang] = useState<Languages>(() => {
    const browserLang = (localStorage.getItem(LANG_KEY) || window.navigator.language.slice(0, 2)) as Languages
    return supportedLangs.includes(browserLang) ? browserLang : defaultLang
  })

  const setLangWithLocalStorage = useCallback((lang: Languages) => {
    localStorage.setItem(LANG_KEY, lang)
    setLang(lang)
  }, [])

  const trl = useCallback(
    (valueWithParam: { hu: string; en: string }, ...params: (string | number)[]) => {
      const stringParams: string[] = params.map((param: string | number) => param.toString())

      const { trlLang, prefix } =
        typeof valueWithParam[lang] !== "undefined" && valueWithParam[lang] !== ""
          ? { trlLang: lang, prefix: "" }
          : { trlLang: defaultLang, prefix: lang + "_" }

      return (
        prefix +
        stringParams.reduce(
          (accumulator, currentValue, i) => accumulator.replace("$" + i, currentValue),
          valueWithParam[trlLang],
        )
      )
    },
    [lang],
  )

  return (
    <I18nContext.Provider value={{ lang, trl, setLang: setLangWithLocalStorage }}>
      {props.children}
    </I18nContext.Provider>
  )
}
