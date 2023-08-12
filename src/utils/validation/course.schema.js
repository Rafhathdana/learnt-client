import * as yup from "yup";

const MAX_PRICE = 50 * 1000;
const courseSchema = yup
  .object({
    title: yup.string().required().trim(),
    tagline: yup.string().required(),
    difficulty: yup.string().required(),
    category: yup.string().required(),
    about: yup.string().required(), // Adjusted validation for the "about" field
    price: yup.number().positive().integer().required().max(MAX_PRICE),
    thumbnail: yup.mixed().required(),
  })
  .required();

export default courseSchema;
