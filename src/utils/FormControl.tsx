import DocForm from '../components/form/DocForm'
import Form from '../components/form/Form'

const FormControl = (): JSX.Element => {
  const loc = window.location.href[3]

  if (loc === 'department') {
    return <Form />
  }
  if (loc === 'doctor') {
    return <DocForm />
  } else {
    return <Form />
  }
}

export default FormControl
