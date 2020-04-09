import { Input, Label } from "components/StyledDomElements";
import { connect, FieldProps, FormikContext, FormikValues } from "formik";
import React from "react";
import { isRequiredField } from "../validator";

type Props = {
  name: string;
  label: string;
  disabled: boolean;
  formik: FormikContext<FormikValues>;
  placeholder?:string;
};

type OwnProps = FieldProps & Props;

const TextField = ({
  field, // { name, value, onChange, onBlur }
  label,
  placeholder,
  form: { touched, errors, isSubmitting }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  formik,
  disabled = false
}: OwnProps) => (
  <div className="form-group">
    <Label className="col-md-1-4" htmlFor={field.name}>
      {label}
    </Label>
    <div className="col-md-3-4">
      <Input
        type="text"
        {...field}
        value={field.value || ""}
        aria-invalid={!!errors[field.name]}
        aria-required={isRequiredField(formik, field.name)}
        disabled={isSubmitting || disabled}
        placeholder={placeholder}
      />
      {touched[field.name] && errors[field.name] && <p className="form-message msg-error">{errors[field.name]}</p>}
    </div>
  </div>
);

export default connect(TextField);
