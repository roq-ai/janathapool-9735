import * as yup from 'yup';

export const carPoolValidationSchema = yup.object().shape({
  company_id: yup.string().nullable(),
  employee_id: yup.string().nullable(),
  passenger_id: yup.string().nullable(),
});
