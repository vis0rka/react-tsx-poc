import LoaderOneDot from "components/LoaderOneDot"
import TimelineCalendar from "components/TimelineCalendar"
import TimelineEntry from "components/TimelineCalendar/FilterType/TimelineEntry"
import { useApiCall } from "hooks/useApiCall"
import FramedLayout from "layouts/Framed"
import { timelineApi } from "mock/timelineApi"
import React, { useEffect, useState } from "react"

const TimelineCalendarView = () => {
  const [data, isLoading, , doFetch] = useApiCall({ apiCall: timelineApi.apiTimelineEntriesGet, runOnInit: false })
  const [mockData, setMockdata] = useState()

  useEffect(() => {
    !data && doFetch()
    setMockdata((data || []).map(timelineEntry => new TimelineEntry(timelineEntry)))
  }, [data, doFetch])

  return (
    <FramedLayout title="Timeline Calendar">
      {isLoading || !data ? <LoaderOneDot /> : <TimelineCalendar timelineData={mockData} />}
    </FramedLayout>
  )
}

export default TimelineCalendarView
