import { DataGrid, GridColDef } from '@mui/x-data-grid'
import {
  AccountantInvoiceTable,
  AccountantTable,
  AdmitHistoryTable,
  BedAllotmentTable,
  DepartmentTable,
  DoctorsTable,
  LaboratoristTable,
  ManageAppointmentTable,
  ManageBloodDonorTable,
  ManageMedicineTable,
  ManageNoticeboardTable,
  ManagePrescriptionTable,
  ManageProfileTable,
  MedicineCategoryTable,
  NurseTable,
  OperationHistoryTable,
  PatientAppointmentTable,
  PatientsTable,
  PharmacistTable,
  ProvideMedicationTable,
  ResetPasswordTable,
  SystemSettingsTable,
  ViewAppointmentTable,
  ViewBedStatusTable,
  ViewBirthReportTable,
  ViewBloodBankTable,
  ViewDeathReportTable,
  ViewDoctorsTable,
  ViewInvoiceTable,
  ViewMedicineTable,
  ViewOperationTable,
  ViewPaymentTable,
  ViewPrescriptionTable,
} from '../../utils/lists/table/TablesList'
import './table.css'
import { useState, useEffect } from 'react'
export default function DataTable() {
  const rows = [
    {
      id: 1,
      departmentName: 'Snow',
      description: 'Jon',
      doctorName: 'Tayo',
      medicineCategory: 'malaria',
    },
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
      if (currentPage === 'patient') {
        setColumn(PatientsTable)
      }
      if (currentPage === 'nurse') {
        setColumn(NurseTable)
      }
      if (currentPage === 'pharmacist') {
        setColumn(PharmacistTable)
      }
      if (currentPage === 'laboratorist') {
        setColumn(LaboratoristTable)
      }
      if (currentPage === 'accountant') {
        setColumn(AccountantTable)
      }
      if (currentPage === 'viewAppointment') {
        setColumn(ViewAppointmentTable)
      }
      if (currentPage === 'viewPayment') {
        setColumn(ViewPaymentTable)
      }
      if (currentPage === 'viewBedStatus') {
        setColumn(ViewBedStatusTable)
      }
      if (currentPage === 'viewBloodBank') {
        setColumn(ViewBloodBankTable)
      }
      if (currentPage === 'viewMedicine') {
        setColumn(ViewMedicineTable)
      }
      if (currentPage === 'viewOperation') {
        setColumn(ViewOperationTable)
      }
      if (currentPage === 'viewDeathReport') {
        setColumn(ViewDeathReportTable)
      }
      if (currentPage === 'viewBirthReport') {
        setColumn(ViewBirthReportTable)
      }
      if (currentPage === 'manageNoticeboard') {
        setColumn(ManageNoticeboardTable)
      }
      if (currentPage === 'systemSetting') {
        setColumn(SystemSettingsTable)
      }
      if (currentPage === 'profile') {
        setColumn(ManageProfileTable)
      }
      if (currentPage === 'resetPassword') {
        setColumn(ResetPasswordTable)
      }
      if (currentPage === 'manageAppointment') {
        setColumn(ManageAppointmentTable)
      }
      if (currentPage === 'patientAppointment') {
        setColumn(PatientAppointmentTable)
      }
      if (currentPage === 'managePrescription') {
        setColumn(ManagePrescriptionTable)
      }
      if (currentPage === 'viewPrescription') {
        setColumn(ViewPrescriptionTable)
      }
      if (currentPage === 'bedAllotment') {
        setColumn(BedAllotmentTable)
      }
      if (currentPage === 'viewDoctor') {
        setColumn(ViewDoctorsTable)
      }
      if (currentPage === 'admitHistory') {
        setColumn(AdmitHistoryTable)
      }
      if (currentPage === 'operationHistory') {
        setColumn(OperationHistoryTable)
      }
      if (currentPage === 'viewInvoice') {
        setColumn(ViewInvoiceTable)
      }
      if (currentPage === 'paymentHistory') {
        setColumn(ViewPaymentTable)
      }
      if (currentPage === 'medicineCategory') {
        setColumn(MedicineCategoryTable)
      }
      if (currentPage === 'manageMedicine') {
        setColumn(ManageMedicineTable)
      }
      if (currentPage === 'provideMedication') {
        setColumn(ProvideMedicationTable)
      }
      if (currentPage === 'manageBloodDonor') {
        setColumn(ManageBloodDonorTable)
      }
      if (currentPage === 'invoice') {
        setColumn(AccountantInvoiceTable)
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
