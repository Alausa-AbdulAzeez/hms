import './formInput.css'

type InputPropsType = {
  value?: string
  label?: string
  errorMessage?: string
  id: number
  name: string
  placeholder: string
}

const FormInput = (props: InputPropsType) => {
  return (
    <div>
      <input className='formInput' placeholder={props.placeholder} />
    </div>
  )
}

export default FormInput
