import { FormikContext, FormikValues, getIn } from "formik";
import { array, boolean, date, string, TestOptions } from "yup";

export const isRequiredField = ({ validationSchema }: FormikContext<FormikValues>, name: string) => {
  return (
    validationSchema &&
    !!getIn(validationSchema.describe().fields, name).tests.find(
      (testName: TestOptions) => testName.name === "required"
    )
  );
};

export const validationShema = {
  string: string().default(""),

  required: string()
    .required("Ez a mező kötelező")
    .default(""),

  boolean: boolean()
    .required("Ez a mező kötelező")
    .default(false),

  date: date()
    .required()
    .default(new Date()),

  email: string()
    .email("Ennek meg emailnek kell lennie!")
    .default("")
    .required(),

  taxNumber: string()
    .matches(/^\d{8}-\d-\d{2}$/)
    .required()
    .default(""),

  phone: string()
    .matches(/^\+[\d]{2,3} [\d]{6,15}$/im)
    .required()
    .default(""),

  positiveWholeNumber: string()
    .matches(/^(?:[1-9]\d*)$/)
    .required()
    .default(""),
  multiSelect: array(string()).default([])
  /* password: {
    required: true,
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
  },
  phone: {
    required: true,
    regex: /^\+[\d]{2,3} [\d]{6,15}$/im
  },

  postalCode: {
    required: true,
    regex: /^\d{4}$/
  },
  positiveNumber: {
    required: true,
    regex: /^(?:[1-9]\d*)?(?:\d+\.\d+)?$/
  },
  positiveWholeNumber: {
    required: true,
    regex: /^(?:[1-9]\d*)$/
  },
  naturalNumber: {
    required: true,
    regex: /^\d+$/
  },
  hrsz: {
    required: true,
    regex: /^\d{2,}(?:[-\/]*\d{1,3})?(?:[-\/][A-Z]{1,2})?(?:[-\/]\d{1,2})?[\/]*$/
  },
  mepar: {
    required: true,
    regex: /^(?=[A-Z])([A-Z0-9]){5}[-]([A-Z0-9]){1}[-]\d{2}$/
  } */
};
