import React, { useContext } from "react"
import FramedLayout from "layouts/Framed"
import PasswordField from "components/Form/Password"
import Form from "components/Form"
import { required, equals } from "components/Form/validators"
import i18nForm from "i18n/Form"
import { I18nContext } from "context/i18n"



const SamePassword = () => {
  const { trl } = useContext(I18nContext)


  const handleSubmit = async (values: any) => {
    console.log("handlesubmit", values)
  }

  return (
    <FramedLayout title="form hook">
      <h1>Password change</h1>
      <Form onSubmit={handleSubmit}>
        <PasswordField name="password" label={`${trl(i18nForm.password)}`} validators={[required]} />
        <PasswordField name="confirmPassword" label={`${trl(i18nForm.newPassword)}`} validators={[required, equals("password")]} />
        <button type="submit">Submit</button>
      </Form>
    </FramedLayout>
  )
}


export default SamePassword
