import * as yup from 'yup';

export const recruitmentProcessValidationSchema = yup.object().shape({
  process_efficiency_score: yup.number().nullable(),
});
