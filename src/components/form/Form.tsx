import './form.css'
import { useState, useEffect } from 'react'
import {
  DepartmentInputs,
  DoctorsInputs,
} from '../../utils/lists/form/FormInputList'
import FormInput from '../formInput/FormInput'

type ValuesType = {
  username: string
  email: string
  birthday: string
  password: string
  confirmPassword: string
}

type InputDataType = {
  id: number
  name: string
  type: string
  placeholder: string
  errorMessage?: string
  label?: string
  pattern?: string
  required?: boolean
}[]

const Form = () => {
  const [values, setValues] = useState<ValuesType>({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const [inputData, setInputData] = useState<InputDataType>([])
  const currentPage = window.location.href.split('/')[3]

  useEffect(() => {
    const setColumnData = () => {
      if (currentPage === 'department') {
        setInputData(DepartmentInputs)
      }
      if (currentPage === 'doctor') {
        setInputData(DoctorsInputs)
      }
    }
    setColumnData()
  }, [currentPage])

  return (
    <div className='app form'>
      <form className='form'>
        {inputData.map((input) => (
          <FormInput key={input.id} {...input} />
        ))}
        <button type={'submit'}>ADD {currentPage.toLocaleUpperCase()}</button>
      </form>
    </div>
  )
}

export default Form
