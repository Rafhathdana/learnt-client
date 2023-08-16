import * as yup from "yup";

const URLRegex =
  /^(https?:\/\/(?:www\.)?github\.com\/[a-zA-Z0-9_-]+)|(https?:\/\/(?:www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+)|[a-zA-Z0-9_-]+$/;

const profileSchema = yup.object({
  name: yup.string().trim().required().min(3).max(25),
  about: yup.string().optional(),
  website: yup
    .string()
    .trim()
    .test("valid-url", "Invalid URL", (value) => {
      if (!value || value.trim().length === 0) {
        return true; // Empty or undefined value is valid
      }
      return URLRegex.test(value.trim());
    })
    .optional(),
  age: yup.number().integer().min(0).optional(),
  address: yup.string().optional(),
  gitLink: yup
    .string()
    .test("valid-git-link", "Invalid GitHub link", (value) => {
      if (!value || value.trim().length === 0) {
        return true; // Empty or undefined value is valid
      }
      return URLRegex.test(value.trim());
    })
    .optional(),
  linkedinLink: yup
    .string()
    .test("valid-linkedin-link", "Invalid LinkedIn link", (value) => {
      if (!value || value.trim().length === 0) {
        return true; // Empty or undefined value is valid
      }
      return URLRegex.test(value.trim());
    })
    .optional(),
  occupation: yup.string().min(1).optional(),
});

export default profileSchema;
