import { DataGrid, GridColDef } from '@mui/x-data-grid'
import {
  DepartmentTable,
  DoctorsTable,
} from '../../utils/lists/table/TablesList'
import './table.css'
import { useState, useEffect } from 'react'

export default function DataTable() {
  const rows = [
    { id: 1, departmentName: 'Snow', description: 'Jon' },
    { id: 2, departmentName: 'Lannister', description: 'Cersei' },
    { id: 3, departmentName: 'Lannister', description: 'Jaime' },
    { id: 4, departmentName: 'Stark', description: 'Arya' },
    { id: 5, departmentName: 'Targaryen', description: 'Daenerys' },
    { id: 6, departmentName: 'Melisandre', description: null },
    { id: 7, departmentName: 'Clifford', description: 'Ferrara' },
    { id: 8, departmentName: 'Frances', description: 'Rossini' },
    { id: 9, departmentName: 'Roxie', description: 'Harvey' },
  ]

  const [column, setColumn] = useState<GridColDef[]>(DepartmentTable)
  const currentPage = window.location.href.split('/')[3]

  useEffect(() => {
    const setColumnData = () => {
      if (currentPage === 'department') {
        setColumn(DepartmentTable)
      }
      if (currentPage === 'doctor') {
        setColumn(DoctorsTable)
      }
    }
    setColumnData()
  }, [currentPage])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={column}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
