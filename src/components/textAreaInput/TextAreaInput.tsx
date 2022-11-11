// import './formInput.css'
import { useState } from 'react'
import { EditValuesType, ValuesType } from '../../utils/types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'

type InputPropsType = {
  input: {
    name: string
  }
  label?: string
  errorMessage?: string
  id: number
  name: string
  placeholder: string

  edit: string
}

const TextAreaInput = (props: InputPropsType) => {
  const previousInputValues: EditValuesType = useSelector(
    (state: RootState) => state.showEditState.formDetails
  )

  const [values, setValues] = useState<ValuesType>({
    departmentName: '',
    description: '',
    name: '',
    email: '',
    phoneNumber: null,
    age: null,
    birthdate: '',
    address: '',
    password: '',
    confirmPassword: '',
  })
  const [editedValues, setEditedValues] =
    useState<EditValuesType>(previousInputValues)

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    formType: string
  ) => {
    if (formType === 'default') {
      setValues({ ...values, [e.target.name]: e.target.value })
    }
    if (formType === 'edit') {
      setEditedValues({
        ...previousInputValues,
        [e.target.name]: e.target.value,
      })
    }
    console.log(props.input.name)
  }
  console.log(props.edit)

  return (
    <div>
      {props.edit === 'false' ? (
        <textarea
          name={props.name}
          className='formInput'
          placeholder={props.placeholder}
          cols={4}
          onChange={(e) => onChange(e, 'default')}
          value={values[props.input.name as keyof typeof values] as string}
        />
      ) : (
        <textarea
          name={props.name}
          className='formInput'
          placeholder={props.placeholder}
          onChange={(e) => onChange(e, 'edit')}
          cols={4}
          value={
            editedValues[props.input.name as keyof typeof values] as string
          }
        />
      )}
    </div>
  )
}

export default TextAreaInput
