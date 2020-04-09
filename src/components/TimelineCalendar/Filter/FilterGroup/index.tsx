import React, { useContext } from "react"
import styled from "styled-components"
import { trl } from "utils/translateTimeline"
import { FilterOptionsContext } from "../../CalendarContext"

type FilterGroupProps = {
  filterOptions: any
  isSublevel?: boolean
  originalFilter: any
}

const FilterGroup = ({ filterOptions, isSublevel, originalFilter }: FilterGroupProps) => {
  const { setFilterOptions } = useContext(FilterOptionsContext)

  const toggleIsShown = (filterObject: any) => {
    filterObject.isShown = !filterObject.isShown

    const newFilterOption = { ...originalFilter }
    setFilterOptions(newFilterOption)
  }

  return (
    <FilterGroups>
      {filterOptions &&
        Object.keys(filterOptions).map((option: any) => {
          return (
            <div
              key={option}
              className={`form-group ${isSublevel ? "sub-level" : "first-level"} ${option.toLowerCase()}`}
            >
              <input
                type="checkbox"
                id={option}
                defaultChecked={filterOptions[option].isShown}
                onChange={() => toggleIsShown(filterOptions[option])}
              />
              <label htmlFor={option}>{trl[option]}</label>
              {filterOptions[option].subtypes && filterOptions[option].isShown && (
                <FilterGroup
                  filterOptions={filterOptions[option].subtypes}
                  isSublevel={true}
                  originalFilter={originalFilter}
                />
              )}
            </div>
          )
        })}
    </FilterGroups>
  )
}

const FilterGroups = styled.div`
  display: contents;

  .first-level {
    margin-bottom: 30px;
    overflow: auto;
    padding: 0 0 10px 0;

    &.businessevent {
      max-height: 28%;
    }
    &.farmingoperation {
      max-height: 63%;
      @media only screen and (min-width: 1900px) {
        max-height: 74%;
      }
    }

    &:hover {
      background-color: #f3f3f3;
    }

    .sub-level {
      margin-left: 30px;
    }
  }
`

export default FilterGroup
