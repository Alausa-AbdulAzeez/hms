import { NavigateFunction } from 'react-router-dom'
import { AppDispatch } from '../redux/store'
import { loginUser } from '../redux/userRedux'
import {
  RolesListType,
  SetRolesListType,
  SetUserType,
  UserType,
} from '../types/types'
import { useState } from 'react'
import { lang } from 'moment'

export const handleSetRoleList = (
  inputType: string,
  setRolesList: SetRolesListType,
  rolesList: RolesListType
) => {
  if (inputType === 'roles') {
    setRolesList((prev) => {
      return !prev
    })
  } else {
    if (rolesList) {
      setRolesList((prev) => {
        return !prev
      })
    }
  }
}

// Set user
export const handleSetUser = (
  event: React.MouseEvent<Element, MouseEvent>,
  user: UserType,
  setUser: SetUserType,
  setRolesList: SetRolesListType,
  rolesList: RolesListType
) => {
  setUser({
    ...user,
    role: event.currentTarget.textContent
      ? event.currentTarget.textContent
      : '',
  })
  handleSetRoleList('roles', setRolesList, rolesList)
}
export const handleChangeUser = (
  event: React.ChangeEvent<HTMLInputElement>,
  setUser: SetUserType
) => {
  setUser((prev) => {
    return { ...prev, [`${event.target.dataset.name}`]: event.target.value }
  })
}

// Form submission
export const handleFormSubmission = (
  event: React.FormEvent<HTMLFormElement>,
  user: UserType,
  navigate: NavigateFunction,
  dispatch: AppDispatch
) => {
  event.preventDefault()
  if (user.email && user.password && user.role) {
    dispatch(loginUser({ ...user, isLoggedIn: true }))
    return navigate('/')
  }
}

// Set submit button state
export const setBtnState = (
  user: UserType,
  setBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (user.email && user.password && user.role) {
    setBtnDisabled(false)
  } else {
    setBtnDisabled(true)
  }
}

// Set Edit
export const useHandleShowEdit = () => {
  const [a, setA] = useState(false)
  setA(true)
  console.log(a)
}
