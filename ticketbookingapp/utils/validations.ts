import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  name: yup.string().min(3).max(40).required(),
  email: yup.string().email().required(),
  contact: yup
    .string()
    .required()
    .test("len", "Must be exactly 10 digits", (val) => val.length === 10)
    .matches(/^\d+$/, "The field should have digits only"),
});
