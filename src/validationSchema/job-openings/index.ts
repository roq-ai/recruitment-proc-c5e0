import * as yup from 'yup';

export const jobOpeningValidationSchema = yup.object().shape({
  salary_range: yup.string().nullable(),
});
