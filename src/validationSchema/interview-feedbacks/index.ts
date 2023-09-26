import * as yup from 'yup';

export const interviewFeedbackValidationSchema = yup.object().shape({
  interviewer_comments: yup.string().nullable(),
});
