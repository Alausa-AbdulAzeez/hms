import './form.css'
import { useForm } from 'react-hook-form'

const DocForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className='form'>
      <input
        {...register('firstName')}
        className='formInput'
        placeholder='First Name'
      />
      <input
        {...register('lastName', { required: true })}
        className='formInput'
        placeholder='Last Name'
      />
      {errors.lastName && <p className='errorP'>Last name is required.</p>}
      <input
        {...register('age', { pattern: /\d+/ })}
        className='formInput'
        placeholder='Age'
      />
      <select
        {...register('category', { required: true })}
        className='formSelect'
      >
        <option value=''>Select...</option>
        <option value='A'>Option A</option>
        <option value='B'>Option B</option>
      </select>
      {errors.age && <p className='errorP'>Please enter number for age.</p>}
      <input type='submit' className='formInput' />
    </form>
  )
}

export default DocForm
