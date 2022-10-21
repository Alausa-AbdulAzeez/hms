import { createSlice } from '@reduxjs/toolkit'

export type UserInitialState = {
  user: {
    role: string
    email: string
    password: string
    isLoggedIn: boolean
  }
}

const initialState: UserInitialState = {
  user: {
    role: '',
    email: '',
    password: '',
    isLoggedIn: false,
  },
}

export const userSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = {
        role: action.payload.role,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: action.payload.isLoggedIn,
      }
    },
    logoutUser: (state) => {
      state.user = initialState.user
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
