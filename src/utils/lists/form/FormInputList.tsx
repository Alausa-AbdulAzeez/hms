import { InputDataType } from '../../types/types'

export const DepartmentInputs = [
  {
    id: 1,

    name: 'departmentName',
    type: 'text',
    placeholder: 'Department Name',

    required: true,
  },
  {
    id: 2,
    name: 'description',
    type: 'text',
    placeholder: 'Description',

    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
]

export const DoctorsInputs: InputDataType = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 4,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: "Passwords don't match!",
    label: 'Confirm Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 5,
    name: 'address',
    type: 'text',
    placeholder: 'Address',

    required: true,
  },
  {
    id: 6,
    name: 'phoneNumber',
    type: 'number',
    placeholder: 'Phone Number',

    required: true,
  },
  {
    id: 7,
    name: 'department',
    type: 'text',
    placeholder: 'Department',
    hasSelect: true,
    options: ['aa', 'bb', 'aa', 'bb', 'aa', 'bb', 'aa', 'bb'],
  },
]

export const PatientsInputs: InputDataType = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 4,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: "Passwords don't match!",
    label: 'Confirm Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 5,
    name: 'address',
    type: 'text',
    placeholder: 'Address',

    required: true,
  },
  {
    id: 6,
    name: 'phoneNumber',
    type: 'number',
    placeholder: 'Phone Number',

    required: true,
  },
  {
    id: 7,
    name: 'sex',
    type: 'text',
    placeholder: 'Sex',
    hasSelect: true,
    options: ['M', 'F'],
  },
  {
    id: 8,
    name: 'birthdate',
    type: 'text',
    placeholder: 'Birthdate',
  },
  {
    id: 9,
    name: 'age',
    type: 'number',
    placeholder: 'Age',
    min: 0,
  },
  {
    id: 7,
    name: 'bloodGroup',
    type: 'text',
    placeholder: 'Blood Group',
    hasSelect: true,
    options: ['0+', 'A+'],
  },
]

export const NurseInputs: InputDataType = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 4,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: "Passwords don't match!",
    label: 'Confirm Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 5,
    name: 'address',
    type: 'text',
    placeholder: 'Address',

    required: true,
  },
  {
    id: 6,
    name: 'phoneNumber',
    type: 'number',
    placeholder: 'Phone Number',

    required: true,
  },
]

export const PharmacistInputs: InputDataType = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 4,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: "Passwords don't match!",
    label: 'Confirm Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 5,
    name: 'address',
    type: 'text',
    placeholder: 'Address',

    required: true,
  },
  {
    id: 6,
    name: 'phoneNumber',
    type: 'number',
    placeholder: 'Phone Number',

    required: true,
  },
]
export const LaboratoristInputs: InputDataType = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 4,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: "Passwords don't match!",
    label: 'Confirm Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 5,
    name: 'address',
    type: 'text',
    placeholder: 'Address',

    required: true,
  },
  {
    id: 6,
    name: 'phoneNumber',
    type: 'number',
    placeholder: 'Phone Number',

    required: true,
  },
]
export const AccountantInputs: InputDataType = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 4,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: "Passwords don't match!",
    label: 'Confirm Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 5,
    name: 'address',
    type: 'text',
    placeholder: 'Address',

    required: true,
  },
  {
    id: 6,
    name: 'phoneNumber',
    type: 'number',
    placeholder: 'Phone Number',

    required: true,
  },
]
