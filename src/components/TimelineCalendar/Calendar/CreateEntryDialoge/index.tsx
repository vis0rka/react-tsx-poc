import React from "react"
import Modal from "react-modal"
import Datepicker from "components/Form/Datepicker"
import SingleSelect from "components/Form/Select/SingleSelect"
import TextField from "components/Form/TextfieldWithFormik"
import { validationShema } from "components/Form/validator"
import { Field, Form, Formik, FormikActions, FormikProps, FormikValues } from "formik"
import { InferType as YupInferType, object as yupObject } from "yup"
import { FarmingOperationViewModelType } from "plugins/clients/api"
import { trl } from "utils/translateTimeline"
import { SimpleButton, ConfirmButton, Buttons, Title, ContentInModal, Container, Header } from "../styledElements"

const myFormShema = yupObject({
  date: validationShema.date,
  type: validationShema.required,
  comment: validationShema.required,
})

type myShema = YupInferType<typeof myFormShema>

type CreateEntryDialogeProps = {
  modalIsOpen: boolean
  closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void
  initalDate: Date
}

Modal.setAppElement("#root")

const CreateEntryDialoge = ({ modalIsOpen, closeModal, initalDate }: CreateEntryDialogeProps) => {
  const handleSubmit = (values: myShema, actions: FormikActions<myShema>) => {
    console.log({ values, actions })
    console.log(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
  }

  const types = Object.keys(FarmingOperationViewModelType)
    .filter(type => type.includes("_"))
    .map(type => {
      return {
        label: trl[type.split("_")[0]] + ": " + trl[type.split("_")[1]],
        value: type,
      }
    })

  return (
    <Modal
      isOpen={modalIsOpen}
      className="modal"
      overlayClassName="overlay"
      parentSelector={() => document.querySelector("#timeline-calendar") as HTMLElement}
    >
      <Container>
        <Formik
          initialValues={{ date: initalDate, type: "", comment: "" }}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={myFormShema}
          enableReinitialize={true}
        >
          {(props: FormikProps<FormikValues>) => {
            return (
              <Form>
                <ContentInModal>
                  <Header>
                    <Title>Új gazdálkodási művelet létrehozása</Title>
                  </Header>
                  <div className="row">
                    <div className="col-md">
                      <Field name="date" label="Dátum" component={Datepicker} />
                      <Field name="type" label="Típus" options={types} component={SingleSelect} />
                      <Field name="comment" label="Komment" placeholder="Maximum 140 karakter." component={TextField} />
                    </div>
                  </div>
                </ContentInModal>
                <Buttons>
                  <SimpleButton type="button" onClick={closeModal}>
                    Mégse
                  </SimpleButton>
                  <ConfirmButton type="submit" onClick={() => props.handleSubmit}>
                    Ok
                  </ConfirmButton>
                </Buttons>
              </Form>
            )
          }}
        </Formik>
      </Container>
    </Modal>
  )
}

export default CreateEntryDialoge
