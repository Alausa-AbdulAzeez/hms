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
