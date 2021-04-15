import * as yup from 'yup';

const FormValidations = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  link: yup.string().url('Url invalid').required('Url is required'),
  description: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Description is required'),
  tags: yup.string().required('Tags is required'),
});

export default FormValidations;
