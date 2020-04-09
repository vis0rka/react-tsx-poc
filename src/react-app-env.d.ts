/// <reference types="react-scripts" />

declare module "react-visjs-timeline"
declare module "vis"

declare type AppProps = {
  config: AppConfig
}

declare type AppConfig = {
  url: string
}

declare type GenericArgOf<T> = T extends Promise<infer U> ? U : T
declare type TypeOfArray<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer TypeOfArray>
  ? TypeOfArray
  : never

declare module "react-date-picker" {
  export default function DatePicker(props: myDatePickerProps): JSX.Element
  interface myDatePickerProps extends DatePickerProps {
    ref?: any
    type?: string
  }
}
