import './formInput.css'
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
  type: string
  min?: number
  edit: string
}

const FormInput = (props: InputPropsType) => {
  const previousInputValues: EditValuesType = useSelector(
    (state: RootState) => state.showEditState.formDetails
  )
  console.log(previousInputValues)

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
    e: React.ChangeEvent<HTMLInputElement>,
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
        <input
          name={props.name}
          className='formInput'
          placeholder={props.placeholder}
          type={props.type}
          min={props.min}
          onChange={(e) => onChange(e, 'default')}
          value={values[props.input.name as keyof typeof values] as string}
        />
      ) : (
        <input
          name={props.name}
          className='formInput'
          placeholder={props.placeholder}
          type={props.type}
          min={props.min}
          onChange={(e) => onChange(e, 'edit')}
          // value='a'
          value={
            editedValues[props.input.name as keyof typeof values] as string
          }
        />
      )}
    </div>
  )
}

export default FormInput
