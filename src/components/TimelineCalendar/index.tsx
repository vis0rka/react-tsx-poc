import React, { useState, useEffect, useCallback } from "react"
import Calendar from "./Calendar"
import Filter from "./Filter"
import { TimelineViewModel, TypeEnum } from "mock/timelineApi"
import FilterType from "./FilterType"
import moment from "moment"
import { FilterOptionsContext } from "./CalendarContext"

type timelineCalendarProps = {
  timelineData: Array<TimelineViewModel>
}

const TimelineView = ({ timelineData }: timelineCalendarProps) => {
  const [initalData] = useState(timelineData)

  const removeDuplications = (list: any) => {
    return [...new Set(list)].map((type: any) => new FilterType(type, true, []))
  }

  const arrayToObjectByType = (arrayTo: any) => {
    return arrayTo.reduce(
      (accumulator: any, currentValue: any) => ({
        ...accumulator,
        [currentValue.type]: {
          isShown: currentValue.isShown,
          subtypes: arrayToObjectByType(currentValue.subtypes),
        },
      }),
      {},
    )
  }

  const getFilterOptions = () => {
    let options = removeDuplications(initalData.map(timelineEntry => timelineEntry.type)).map(
      (type: FilterType) =>
        new FilterType(
          type.type,
          true,
          removeDuplications(
            initalData
              .filter(timelineEntry => timelineEntry.type === type.type)
              .map(timelineEntry => timelineEntry.subType),
          ),
        ),
    )

    options.forEach((mainType: FilterType) => {
      if (mainType.type !== (TypeEnum.FarmingOperation as any)) return

      mainType.subtypes = removeDuplications(mainType.subtypes.map(type => type.type.split("_")[0])).map(
        (type: FilterType) =>
          new FilterType(
            type.type,
            type.isShown,
            mainType.subtypes
              .filter(t => t.type.split("_")[0] === type.type)
              .map(t => new FilterType(t.type.split("_")[1], t.isShown, [])),
          ),
      )
    })

    return arrayToObjectByType(options)
  }
  const [filterOptions, setFilterOptions] = useState(getFilterOptions())

  const getIsShownByFilterOption = useCallback(
    (entry: TimelineViewModel) => {
      const splittedSubtype = entry.subType.split("_")
      return (
        filterOptions[entry.type].isShown &&
        filterOptions[entry.type].subtypes[splittedSubtype[0]].isShown &&
        (!splittedSubtype[1] ||
          filterOptions[entry.type].subtypes[splittedSubtype[0]].subtypes[splittedSubtype[1]].isShown)
      )
    },
    [filterOptions],
  )

  const getDateAsPropertyName = (date: Date) => {
    return moment(date).format("YYMD")
  }

  const getAssortedEntries = useCallback(() => {
    return initalData.reduce(
      (accumulator: any, currentValue: any) => ({
        ...accumulator,
        [getDateAsPropertyName(currentValue.date)]: [
          {
            ...currentValue,
            isShown: getIsShownByFilterOption(currentValue),
          },
        ].concat(accumulator[getDateAsPropertyName(currentValue.date)] || []),
      }),
      {},
    )
  }, [initalData, getIsShownByFilterOption])

  const [assortedTimeline, setAssortedTimeline] = useState(getAssortedEntries())

  useEffect(() => {
    setAssortedTimeline(getAssortedEntries())
  }, [filterOptions, getAssortedEntries])

  return (
    <div className="row">
      <FilterOptionsContext.Provider value={{ filterOptions, setFilterOptions }}>
        <Filter></Filter>
        <Calendar assortedTimeline={assortedTimeline}></Calendar>
      </FilterOptionsContext.Provider>
    </div>
  )
}

export default TimelineView
