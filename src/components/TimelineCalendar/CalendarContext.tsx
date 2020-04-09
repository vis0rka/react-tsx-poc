import { createContext, Dispatch, SetStateAction } from "react"

export type CalendarContextType = {
  entryDetails: {
    type: string
    timeStamp: string
    comment: string
    date: string
    primaryText: string
    description: string
  }
  setEntryDetails: Dispatch<SetStateAction<CalendarContextType>>
}

export const CalendarContext = createContext<CalendarContextType>({} as CalendarContextType)

export type FilterOptionsContextType = {
  filterOptions: Object
  setFilterOptions: Dispatch<SetStateAction<CalendarContextType>>
}

export const FilterOptionsContext = createContext<FilterOptionsContextType>({} as FilterOptionsContextType)
