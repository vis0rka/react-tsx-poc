import React, { useContext } from "react"
import styled from "styled-components"
import moment from "moment"
import { trl } from "utils/translateTimeline"
import { FarmingOperationTypeEnum } from "mock/timelineApi"
import { CalendarContext } from "../../CalendarContext"
import { TimelineViewModel } from "mock/timelineApi"

type DayViewProps = {
  date: Date
  openAddNewEntryModal: (date: Date) => void
  openEntryDetails: (event: React.MouseEvent<HTMLDivElement>) => void
  entries: Array<TimelineViewModel>
}

const DayView = ({ date, openAddNewEntryModal, openEntryDetails, entries }: DayViewProps) => {
  const { setEntryDetails } = useContext(CalendarContext)

  const getSubtypeString = (subtype: any) => {
    const splittedSubtype = subtype.split("_")
    return trl[splittedSubtype[1]] || trl[splittedSubtype[0]]
  }

  const getTitle = (entry: any) => {
    return entry.subType === (FarmingOperationTypeEnum.OtherOperationOther as any)
      ? entry.comment.match(/.{40,60}\w*\s+|.*/g).join("\n")
      : getSubtypeString(entry.subType)
  }

  const setContextEntryDetails = (e: React.MouseEvent<HTMLDivElement>, entry: any) => {
    setEntryDetails(entry)
    openEntryDetails(e)
  }

  return (
    <Day>
      <Date>{moment(date).format("D")}</Date>
      <Entries>
        {entries &&
          entries.map((entry: any, idx: number) => {
            return (
              entry.isShown && (
                <div className="entry" key={entry.subType + entry.comment + idx}>
                  <div className={`bullet ${entry.type.toLowerCase()}`}>⬤</div>
                  <div className="text" title={getTitle(entry)} onClick={e => setContextEntryDetails(e, entry)}>
                    {getSubtypeString(entry.subType)}
                  </div>
                </div>
              )
            )
          })}
      </Entries>
      <Add>
        <button type="button" className="btn-sm" onClick={() => openAddNewEntryModal(date)}>
          <i className="fas fa-plus"></i>
        </button>
      </Add>
    </Day>
  )
}

export default DayView

const Date = styled.div`
  text-align: right;
  padding: 2px 5px;
  font-weight: bold;
`
const Add = styled.div`
  position: absolute;
  text-align: center;
  padding: 0;
  display: none;
  width: calc(100% + 1rem);
  margin-left: -0.5rem;
  bottom: 0;
  border: none;

  button {
    cursor: pointer;
    background-color: #f5f5f5;
    width: 100%;
    font-size: 0.6rem;
    padding: 0;
    border: none;
    &:hover {
      background-color: lightgrey;
    }
  }
`
const Day = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover ${Add} {
    display: block;
  }
`

const Entries = styled.div`
  overflow: auto;
  height: inherit;

  .entry {
    display: flex;
    height: 1.3em;
    white-space: nowrap;

    div {
      text-overflow: ellipsis;
      overflow: hidden;

      &.text:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      &.bullet {
        min-width: 1.3em;
      }
      &.bullet.businessevent {
        color: red;
      }
      &.bullet.farmingoperation {
        color: green;
      }
    }
  }
`
