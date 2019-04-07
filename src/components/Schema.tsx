import * as Yup from "yup";
//import IScope from "./state/scope/IScope";

// https://github.com/jquense/yup
const schema = Yup.object().shape({
  objectives: Yup.string()
    .min(2, "Title length should be 2 character or more")
    .max(50, "Title length is limit to maximum of 50 characters")
    .required("Required")
});

export default schema;
