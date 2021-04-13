import * as yup from 'yup';

const FormValidations = yup.object().shape({
  name: yup.string().required('Name is required'),
  url: yup.string().url('Url invalid').required('Url is required'),
  description: yup.string().required('Description is required'),
  tags: yup.string().required('Tags is required'),
});

export default FormValidations;
