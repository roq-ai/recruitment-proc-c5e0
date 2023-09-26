import * as yup from 'yup';

export const candidateValidationSchema = yup.object().shape({
  previous_experience: yup.string().nullable(),
  name: yup.string().nullable(),
  email: yup.string().nullable(),
  mobile: yup.string().nullable(),
});
