import * as yup from 'yup';

export const interviewValidationSchema = yup.object().shape({
  interview_feedback: yup.string().nullable(),
});
