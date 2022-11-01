import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GridValueGetterParams } from '@mui/x-data-grid'

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
          <button className='userListEdit'>Edit</button>
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
          <button className='userListEdit'>Edit</button>
          <FontAwesomeIcon icon={faTrash} className='userListDelete' />
        </>
      )
    },
  },
]
