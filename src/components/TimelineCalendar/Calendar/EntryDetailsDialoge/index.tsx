import React from "react"
import Modal from "react-modal"
import { SimpleButton, Buttons, Title, ContentInModal, Container, Header } from "../styledElements"
import { trl } from "utils/translateTimeline"
import moment from "moment"
import styled from "styled-components"

Modal.setAppElement("#root")

type EntryDetailsDialogeProps = {
  modalIsOpen: boolean
  closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void
  entry: any
}

const EntryDetailsDialoge = ({ modalIsOpen, closeModal, entry }: EntryDetailsDialogeProps) => {
  const splittedSubtype = (entry && entry.subType.split("_")) || ""

  let primaryText = trl[splittedSubtype[0]]
  primaryText += trl[splittedSubtype[1]] ? ": " + trl[splittedSubtype[1]] : ""

  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal"
      overlayClassName="overlay"
      parentSelector={() => document.querySelector("#timeline-calendar") as HTMLElement}
    >
      <ContainerShowEntry>
        <ContentInModal>
          <Header>
            <Title>{trl[entry.type]}</Title>
            <span className="entry-details-dialoge-title-date">{moment(entry.date).format("L")}</span>
          </Header>
          <hr />
          <div className="entry-details-dialoge-text">
            <b>Név: </b>
            {primaryText}
          </div>
          {entry.comment && (
            <div className="entry-details-dialoge-text">
              <hr /> <b>Megjegyzés:</b> {entry.comment}
            </div>
          )}
        </ContentInModal>
        <Buttons>
          <SimpleButton type="button" onClick={closeModal}>
            Ok
          </SimpleButton>
        </Buttons>
      </ContainerShowEntry>
    </Modal>
  )
}

const ContainerShowEntry = styled(Container)`
  .entry-details-dialoge-title-date {
    margin-left: 2rem;
    font-size: inherit;
  }
  .entry-details-dialoge-text {
    margin: 1rem 0;
  }
`
export default EntryDetailsDialoge
