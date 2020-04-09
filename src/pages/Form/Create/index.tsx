import React, { useCallback, useContext } from "react"
import FramedLayout from "layouts/Framed"
import TextfieldSimple from "components/Form/Textfield"
import { FormPocResponse } from "mock/api"
import Form from "components/Form"
import { required } from "components/Form/validators"
import { nameofFactory } from "components/Table/types"
import i18nForm from "i18n/Form"
import { I18nContext } from "context/i18n"
import Phonefield from "components/Form/Phonefield"
import Datepicker from "components/Form/Datepicker"
import SingleSelect from "components/Form/Select/SingleSelect"
import MultiSelect from "components/Form/Select/MultiSelect"


const CreateForm = () => {
  const nameof = useCallback(nameofFactory<FormPocResponse>(), [])
  const { trl } = useContext(I18nContext)

  const handleSubmit = async (values: any) => {
    console.log("handlesubmit", values)
  }

  return (
    <FramedLayout title="form hook">
      <h1>Register Here</h1>
      <Form onSubmit={handleSubmit}>
        <TextfieldSimple name={nameof("firstName")} label={`${trl(i18nForm.name)}`} validators={[required]} />
        <TextfieldSimple name={nameof("email")} label={`${trl(i18nForm.email)}`} validators={[required]} />
        <Phonefield name={nameof("phoneField")} label={`${trl(i18nForm.phone)}`} validators={[required]} />
        <Datepicker name={nameof("date")} label={`${trl(i18nForm.date)}`} validators={[required]} />
        <SingleSelect
          name={nameof("singleSelect")}
          label={`${trl(i18nForm.status)}`}
          options={singleSelect}
          validators={[required]}
        />
        <MultiSelect name={nameof("multiSelect")} label={`${trl(i18nForm.other)}`} options={multiSelect} validators={[required]} />
        <button type="submit">Submit</button>
      </Form>
    </FramedLayout>
  )
}

const singleSelect = [
  {
    label: "Aktív",
    value: "true",
  },
  {
    label: "Inaktív",
    value: "false",
  },
]

 const multiSelect = [
  {
    label: "Natura 2000 terület",
    value: "Natura 2000 terület",
  },
  {
    label: "Nitrát érzékeny",
    value: "Nitrát érzékeny",
  },
  {
    label: "KAT terület",
    value: "KAT terület",
  },
  {
    label: "12% lejtő",
    value: "12% lejtő",
  },
]  

export default CreateForm
