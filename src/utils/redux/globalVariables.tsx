import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface GlobalVariablesState {
  showEdit: boolean
  formDetails: {
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
  showRoles: boolean
}
const initialState: GlobalVariablesState = {
  showEdit: false,
  formDetails: {},
  showRoles: true,
}

export const globalVariablesSlice = createSlice({
  name: 'showEditState',
  initialState,
  reducers: {
    setEditTrue: (state) => {
      state.showEdit = true
    },
    setEditFalse: (state) => {
      state.showEdit = false
    },
    setFormDetails: (state, action) => {
      console.log(action.payload)

      state.formDetails = action.payload
    },
    setShowRolesFalse: (state) => {
      state.showRoles = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEditTrue, setEditFalse, setFormDetails, setShowRolesFalse } =
  globalVariablesSlice.actions

export default globalVariablesSlice.reducer
