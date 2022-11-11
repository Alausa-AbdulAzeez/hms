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
    name: 'doctorName',
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
export const manageNoticeboardInputs: InputDataType = [
  {
    id: 1,
    name: 'title',
    type: 'text',
    placeholder: 'Title',
    required: true,
  },
  {
    id: 2,
    name: 'notice',
    type: 'text',
    placeholder: 'Notice',

    required: true,
  },
  {
    id: 3,
    name: 'date',
    type: 'text',
    placeholder: 'Date',

    required: true,
  },
]
export const systemSettingsInputs: InputDataType = [
  {
    id: 1,
    name: 'systemName',
    type: 'text',
    placeholder: 'System Name',
    required: true,
  },
  {
    id: 2,
    name: 'systemEmail',
    type: 'email',
    placeholder: 'system Email',

    required: true,
  },
  {
    id: 1,
    name: 'systemTitle',
    type: 'text',
    placeholder: 'System Title',
    required: true,
  },
  {
    id: 3,
    name: 'address',
    type: 'text',
    placeholder: 'Address',

    required: true,
  },
  {
    id: 4,
    name: 'phoneNo',
    type: 'text',
    placeholder: 'Phone No',

    required: true,
  },

  {
    id: 5,
    name: 'paypalEmail',
    type: 'email',
    placeholder: 'Paypal Email',

    required: true,
  },
  {
    id: 6,
    name: 'options',
    type: 'text',
    placeholder: 'Options',

    required: true,
  },
]
export const profileInputs: InputDataType = [
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

    required: true,
  },

  {
    id: 3,
    name: 'address',
    type: 'text',
    placeholder: 'Address',

    required: true,
  },
  {
    id: 4,
    name: 'phoneNo',
    type: 'text',
    placeholder: 'Phone No',

    required: true,
  },
]
export const resetPasswordInputs: InputDataType = [
  {
    id: 1,
    name: 'oldPassword',
    type: 'password',
    placeholder: 'Old Password',
    required: true,
  },
  {
    id: 2,
    name: 'newPassword',
    type: 'password',
    placeholder: 'New Password',
    required: true,
  },

  {
    id: 3,
    name: 'confirmNewPassword',
    type: 'password',
    placeholder: 'Confirm New Password',
    required: true,
  },
]
export const manageAppointmentInputs: InputDataType = [
  {
    id: 2,
    name: 'patient',
    type: 'text',
    placeholder: 'Patient',
    required: true,
    hasSelect: true,
    options: ['Please select patient', 'Mahe', 'Fawaz'],
  },

  {
    id: 3,
    name: 'date',
    type: 'text',
    placeholder: 'Date',
    required: true,
  },
]
export const managePrescriptionInputs: InputDataType = [
  {
    id: 2,
    name: 'patient',
    type: 'text',
    placeholder: 'Patient',
    required: true,
    hasSelect: true,
    options: ['Please select patient', 'Mahe', 'Fawaz'],
  },

  {
    id: 3,
    name: 'caseHistory',
    type: 'text',
    placeholder: 'Case history, add a description',
    required: false,
    hasTextArea: true,
  },
  {
    id: 4,
    name: 'medication',
    type: 'text',
    placeholder: 'Medication, add a description',
    required: false,
    hasTextArea: true,
  },
  {
    id: 5,
    name: 'additionalComment',
    type: 'text',
    placeholder: 'Additional comment',
    required: true,
    hasTextArea: true,
  },
]
export const bedAllotmentInputs: InputDataType = [
  {
    id: 2,
    name: 'bedNo',
    type: 'text',
    placeholder: 'Bed No',
    required: true,
  },

  {
    id: 3,
    name: 'patient',
    type: 'text',
    placeholder: 'Patient',
    required: true,
    hasSelect: true,
    options: ['Please select patient', 'Mahe', 'Fawaz'],
  },
  {
    id: 4,
    name: 'allotementTime',
    type: 'text',
    placeholder: 'Allotement Time',
    required: true,
  },
  {
    id: 5,
    name: 'probableDischargeDate',
    type: 'text',
    placeholder: 'Probable Discharge Date',
    required: true,
  },
]
