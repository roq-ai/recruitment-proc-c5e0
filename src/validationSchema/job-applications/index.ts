import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  application_status: yup.string().required(),
});
