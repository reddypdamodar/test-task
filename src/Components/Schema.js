import * as yup from "yup";
import "yup-phone-lite";

export const schema = yup.object().shape({
  fullName: yup.string().required("Your Full Name is Required!"),
  sex: yup.string().required("Your Sex is required"),
  age: yup.string().required("Your age is required"),
  mobile: yup.string().phone("IN", "Enter valid Indian number"),
  Idtype: yup.string(),

  govtID: yup.string().when("Idtype", {
    is: "aadhar",
    then: (schema) => schema.length(12),
    otherwise: (schema) =>
      schema
        //.string()
        .trim()
        .matches("[A-Z]{5}[0-9]{4}[A-Z]{1}", "Enter valid Pan number"),
  }),

  Guardiantype: yup.string(),
  Guardianname: yup.string(),
  email: yup.string().email(),
  contact: yup.string().phone("IN", "Enter valid Indian number"),
  Address: yup.string(),
  State: yup.string(),
  City: yup.string(),
  Country: yup.string(),
  Pincode: yup.string(),
});
