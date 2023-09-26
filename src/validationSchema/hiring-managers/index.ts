import * as yup from 'yup';

export const hiringManagerValidationSchema = yup.object().shape({
  years_of_experience: yup.number().integer().nullable(),
});
