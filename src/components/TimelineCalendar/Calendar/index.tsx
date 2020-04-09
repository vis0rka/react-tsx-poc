import React, { useState } from "react"
import styled from "styled-components"
import moment from "moment"
import Day from "./Day"
import CreateEntryDialoge from "./CreateEntryDialoge"
import EntryDetailsDialoge from "./EntryDetailsDialoge"
import { getDays, getDaysFromLastMonToFirstSunWithDiff } from "./calendarHelper"
import { CalendarContext } from "../CalendarContext"

type CalendarViewProps = {
  assortedTimeline: any
}

const CalendarView = ({ assortedTimeline }: CalendarViewProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
  const [showEntryModalIsOpen, setShowEntryModalIsOpen] = useState(false)
  const [entryDetails, setEntryDetails] = useState()
  const [createEntryToExactDay, setCreateEntryToExactDay] = useState(new Date())

  const getTitle = () => {
    return moment(currentMonth)
      .format("LL")
      .replace(/ \d{1,2}./, "")
  }

  const getNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }
  const getToday = () => {
    setCurrentMonth(new Date())
  }
  const getPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const getDateAsPropertyName = (date: Date) => {
    return moment(date).format("YYMD")
  }

  const openAddNewEntryModal = (date: Date) => {
    setCreateModalIsOpen(true)
    setCreateEntryToExactDay(date)
  }

  return (
    <>
      <CalendarContext.Provider value={{ entryDetails, setEntryDetails }}>
        <Calendar className="col-md-6-8" id="timeline-calendar">
          <div className="title-row row">
            <h4 className="col-md-6-8 title">{getTitle()}</h4>
            <div className="col-md-2-8 btn-group">
              <button className="btn-sm" type="button" onClick={() => getPrevMonth()}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="btn-sm" type="button" onClick={() => getToday()}>
                ma
              </button>
              <button className="btn-sm" type="button" onClick={() => getNextMonth()}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="days-name-row row">
            {getDays().map(day => (
              <div className="col-md-1-7 days" key={day}>
                {day}
              </div>
            ))}
          </div>
          <div className="days-grid row">
            {getDaysFromLastMonToFirstSunWithDiff(currentMonth).map(day => (
              <div className="col-md-1-7 day" key={day.toDateString()}>
                {day.getMonth() === currentMonth.getMonth() ? (
                  <Day
                    date={day}
                    entries={assortedTimeline[getDateAsPropertyName(day)]}
                    openAddNewEntryModal={openAddNewEntryModal}
                    openEntryDetails={() => setShowEntryModalIsOpen(true)}
                  ></Day>
                ) : null}
              </div>
            ))}
          </div>
          <CreateEntryDialoge
            modalIsOpen={createModalIsOpen}
            initalDate={createEntryToExactDay}
            closeModal={() => setCreateModalIsOpen(false)}
          />
          {entryDetails && (
            <EntryDetailsDialoge
              modalIsOpen={showEntryModalIsOpen}
              entry={entryDetails}
              closeModal={() => setShowEntryModalIsOpen(false)}
            />
          )}
        </Calendar>
      </CalendarContext.Provider>
    </>
  )
}

const Calendar = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
  }

  hr {
    margin: 0.5rem auto;
  }

  .title-row {
    .btn-group {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .days-name-row {
    border-bottom: solid 2px #e1e1e1;
    padding: 5px 0;

    .days {
      text-align: right;
      font-weight: bold;
    }
  }
  .days-grid {
    .day {
      border: solid 1px #e1e1e1;
      height: 11vh;
      font-size: 10px;
      @media only screen and (min-width: 1900px) {
        font-size: 15px;
      }
    }
  }

  .entry-details-dialoge-title-date {
    float: right;
  }

  .modal {
    background-color: #fff;
    width: fit-content;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
  }
  .overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default CalendarView
