import * as yup from 'yup';

const FormValidations = yup.object().shape({
  title: yup.string().max(50, 'Too Long!').required('Title is required'),
  link: yup.string().url('Url invalid').required('Url is required'),
  description: yup
    .string()
    .max(50, 'Too Long!')
    .required('Description is required'),
  tags: yup.string().required('Tags is required'),
});

export default FormValidations;
