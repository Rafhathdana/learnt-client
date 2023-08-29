import * as yup from "yup";
const categorySchema = yup
  .object({
    title: yup.string().required().trim().min(3).max(30),
    description: yup.string().required().min(50).max(90),
  })
  .required();
export default categorySchema;
