import React from "react"
import FramedLayout from "layouts/Framed"
import { NavLink } from "react-router-dom";

const Form = () => {
  return (
    <FramedLayout title="Form">
      <div>
        <NavLink to="/form/edit">Edit</NavLink>
      </div>
      <div>
        <NavLink to="/form/create">Create</NavLink>
      </div>
      <div>
        <NavLink to="/form/password">Jelszó</NavLink>
      </div>
    </FramedLayout>
  )
}

export default Form
