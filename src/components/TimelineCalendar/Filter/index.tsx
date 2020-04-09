import React, { useContext } from "react"
import styled from "styled-components"
import FilterGroup from "./FilterGroup"
import { FilterOptionsContext } from "../CalendarContext"

const TimelineFilter = () => {
  const { filterOptions } = useContext(FilterOptionsContext)

  return (
    <Filter className="col-md-2-8">
      <h4>Szűrő</h4>
      <FilterGroup filterOptions={filterOptions} originalFilter={filterOptions}/>
    </Filter>
  )
}

const Filter = styled.div`
  max-height: 70vh;

  h4 {
    margin: 0;
  }

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: initial;
    height: 0;
    margin: 0;
  }

  .first-level.businessevent [type="checkbox"]:checked + label:before {
    border-right-color: $timeline-calendar-businessevent;
    border-bottom-color: $timeline-calendar-businessevent;
  }
  .first-level.farmingoperation [type="checkbox"]:checked + label:before {
    border-right-color: $timeline-calendar-farmingoperation;
    border-bottom-color: $timeline-calendar-farmingoperation;
  }
`

export default TimelineFilter
