// Roles type
export type RolesListType = boolean
export type SetRolesListType = React.Dispatch<React.SetStateAction<boolean>>

// User type
export type UserType = {
  role: string
  email: string
  password: string
}
export type SetUserType = React.Dispatch<
  React.SetStateAction<{
    role: string
    email: string
    password: string
  }>
>

// FORM INPUT DATA TYPES

export type InputDataType = {
  id: number
  name: string
  type: string
  placeholder: string
  errorMessage?: string
  label?: string
  pattern?: string
  required?: boolean
  hasSelect?: boolean
  options?: string[]
  min?: number
}[]

// FORM VALUES DATA TYPE

export type ValuesType = {
  departmentName: string
  description: string
  name: string
  email: string
  phoneNumber: number | null
  age: number | null
  birthdate: string
  address: string
  password: string
  confirmPassword: string
}
export type EditValuesType = {
  departmentName?: string
  description?: string
  name?: string
  email?: string
  phoneNumber?: number | null
  age?: number | null
  birthdate?: string
  address?: string
  password?: string
  confirmPassword?: string
}
