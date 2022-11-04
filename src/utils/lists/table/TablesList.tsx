import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GridValueGetterParams } from '@mui/x-data-grid'
import EditBtn from '../../../components/editBtn/EditBtn'

export const DepartmentTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'departmentName',
    headerName: 'Department name',
    width: 300,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.departmentName || ''}`,
    sortable: true,
  },
  { field: 'description', headerName: 'Description', width: 500 },
  {
    field: 'options',
    headerName: 'Options',
    width: 120,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <>
          <EditBtn params={params} />
          <FontAwesomeIcon icon={faTrash} className='userListDelete' />
        </>
      )
    },
  },
]
export const DoctorsTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'doctorName',
    headerName: "Doctor's name",
    width: 300,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.departmentName || ''}`,
    sortable: true,
  },
  { field: 'description', headerName: 'Description', width: 500 },
  {
    field: 'options',
    headerName: 'Options',
    width: 120,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <>
          <EditBtn params={params} />
          <FontAwesomeIcon icon={faTrash} className='userListDelete' />
        </>
      )
    },
  },
]
export const PatientsTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'patientName',
    headerName: "Patient's name",
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.patientName || ''}`,
    sortable: true,
  },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'sex', headerName: 'Sex', width: 150 },
  { field: 'bloodGroup', headerName: 'Blood Group', width: 150 },
  {
    field: 'options',
    headerName: 'Options',
    width: 120,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <>
          <EditBtn params={params} />
          <FontAwesomeIcon icon={faTrash} className='userListDelete' />
        </>
      )
    },
  },
]
export const NurseTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'nurseName',
    headerName: "Nurse's name",
    width: 250,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.nurseName || ''}`,
    sortable: true,
  },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'address', headerName: 'Address', width: 200 },
  { field: 'phone', headerName: 'Phone Number', width: 200, sortable: false },
  {
    field: 'options',
    headerName: 'Options',
    width: 120,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <>
          <EditBtn params={params} />
          <FontAwesomeIcon icon={faTrash} className='userListDelete' />
        </>
      )
    },
  },
]
export const PharmacistTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'pharmacistName',
    headerName: "Pharmacist's name",
    width: 250,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pharmacist || ''}`,
    sortable: true,
  },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'address', headerName: 'Address', width: 200 },
  { field: 'phone', headerName: 'Phone Number', width: 200, sortable: false },
  {
    field: 'options',
    headerName: 'Options',
    width: 120,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <>
          <EditBtn params={params} />
          <FontAwesomeIcon icon={faTrash} className='userListDelete' />
        </>
      )
    },
  },
]
export const LaboratoristTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'laboratoristName',
    headerName: "Laboratorist's name",
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.laboratoristName || ''}`,
    sortable: true,
  },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'sex', headerName: 'Sex', width: 150 },
  { field: 'bloodGroup', headerName: 'Blood Group', width: 150 },
  {
    field: 'options',
    headerName: 'Options',
    width: 120,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <>
          <EditBtn params={params} />
          <FontAwesomeIcon icon={faTrash} className='userListDelete' />
        </>
      )
    },
  },
]
export const AccountantTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'accountantName',
    headerName: "Accountant's name",
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.accountantName || ''}`,
    sortable: true,
  },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'sex', headerName: 'Sex', width: 150 },
  { field: 'bloodGroup', headerName: 'Blood Group', width: 150 },
  {
    field: 'options',
    headerName: 'Options',
    width: 120,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <>
          <EditBtn params={params} />
          <FontAwesomeIcon icon={faTrash} className='userListDelete' />
        </>
      )
    },
  },
]
