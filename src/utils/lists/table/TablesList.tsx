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
      `${params.row.doctorName || ''}`,
    sortable: true,
  },
  { field: 'department', headerName: 'Department', width: 500 },
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
export const ViewDoctorsTable = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'doctorName',
    headerName: "Doctor's name",
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.doctorName || ''}`,
    sortable: true,
  },
  { field: 'department', headerName: 'Department', width: 500 },
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
export const ViewAppointmentTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'time',
    headerName: 'Time',
    width: 400,
    valueGetter: (params: GridValueGetterParams) => `${params.row.time || ''}`,
    sortable: true,
  },
  { field: 'doctor', headerName: 'Doctor', width: 200 },
  { field: 'patient', headerName: 'Patient', width: 200 },
]
export const ViewPaymentTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'time',
    headerName: 'Time',
    width: 100,
    valueGetter: (params: GridValueGetterParams) => `${params.row.time || ''}`,
    sortable: true,
  },
  { field: 'amount', headerName: 'Amount', width: 80 },
  { field: 'paymentType', headerName: 'Payment Type', width: 120 },
  { field: 'transactionId', headerName: 'Transaction ID', width: 110 },
  { field: 'invoiceId', headerName: 'Invoice ID', width: 110 },
  { field: 'patient', headerName: 'Patient', width: 160 },
  { field: 'method', headerName: 'Method', width: 100 },
  { field: 'description', headerName: 'Description', width: 200 },
]
export const AccountantInvoiceTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'invoiceId', headerName: 'Invoice ID', width: 110 },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
    valueGetter: (params: GridValueGetterParams) => `${params.row.time || ''}`,
    sortable: true,
  },
  { field: 'amount', headerName: 'Amount', width: 120 },
  { field: 'patient', headerName: 'Patient', width: 200 },
  { field: 'date', headerName: 'Date', width: 120 },
  { field: 'status', headerName: 'Status', width: 110 },
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
export const MedicineCategoryTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'medicineCategory',
    headerName: 'Medicine Category',
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
export const ManageMedicineTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'medicineName',
    headerName: 'Medicine Name',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.departmentName || ''}`,
    sortable: true,
  },
  {
    field: 'medicineForm',
    headerName: 'Medicine Form',
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.departmentName || ''}`,
    sortable: true,
  },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'price', headerName: 'Price', width: 100 },
  { field: 'manufacturedBy', headerName: 'ManufacturedBy', width: 200 },
  { field: 'quantity', headerName: 'Quantity', width: 100 },
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
export const ViewInvoiceTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'InvoiceId', headerName: 'Invoice ID', width: 120 },

  { field: 'amount', headerName: 'Amount', width: 80 },
  { field: 'patient', headerName: 'Patient', width: 160 },
  { field: 'title', headerName: 'Title', width: 120 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'creationTimeStamp', headerName: 'creationTimeStamp', width: 110 },
  { field: 'status', headerName: 'Status', width: 110 },
  { field: 'option', headerName: 'Option', width: 100 },
]
export const ViewBedStatusTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'bedType',
    headerName: 'Bed Type',
    width: 300,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bedType || ''}`,
    sortable: true,
  },
  { field: 'patient', headerName: 'Patient', width: 200 },
  { field: 'allotmentDate', headerName: 'Allotment Date', width: 200 },
  { field: 'dischargeDate', headerName: 'Discharge Date', width: 200 },
]
export const AdmitHistoryTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'bedNumber',
    headerName: 'Bed Number',
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bedType || ''}`,
    sortable: true,
  },
  {
    field: 'bedType',
    headerName: 'Bed Type',
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.bedType || ''}`,
    sortable: true,
  },
  { field: 'patient', headerName: 'Patient', width: 200 },
  { field: 'allotmentDate', headerName: 'Allotment Date', width: 200 },
  { field: 'dischargeDate', headerName: 'Discharge Date', width: 200 },
]
export const ViewBloodBankTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''}`,
    sortable: true,
  },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'sex', headerName: 'Sex', width: 150 },
  { field: 'bloodGroup', headerName: 'Blood Group', width: 150 },
  { field: 'lastDonationDate', headerName: 'Last Donation Date', width: 150 },
]
export const ManageBloodDonorTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''}`,
    sortable: true,
  },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'sex', headerName: 'Sex', width: 150 },
  { field: 'bloodGroup', headerName: 'Blood Group', width: 150 },
  { field: 'lastDonationDate', headerName: 'Last Donation Date', width: 150 },
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
export const ViewMedicineTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''}`,
    sortable: true,
  },
  { field: 'category', headerName: 'Category', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'price', headerName: 'Price', width: 80 },
  {
    field: 'manufacturingCompany',
    headerName: 'Manufacturing Company',
    width: 200,
  },
]
export const ViewOperationTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'description',
    headerName: 'Description',
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.description || ''}`,
    sortable: true,
  },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'patient', headerName: 'Patient', width: 150 },
  { field: 'doctor', headerName: 'Doctor', width: 150 },
]
export const OperationHistoryTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'description',
    headerName: 'Description',
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.description || ''}`,
    sortable: true,
  },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'patient', headerName: 'Patient', width: 200 },
  { field: 'doctor', headerName: 'Doctor', width: 200 },
]
export const ViewDeathReportTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'description',
    headerName: 'Description',
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.description || ''}`,
    sortable: true,
  },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'patient', headerName: 'Patient', width: 150 },
  { field: 'doctor', headerName: 'Doctor', width: 150 },
]
export const ViewBirthReportTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'description',
    headerName: 'Description',
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.description || ''}`,
    sortable: true,
  },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'patient', headerName: 'Patient', width: 150 },
  { field: 'doctor', headerName: 'Doctor', width: 150 },
]
export const SystemSettingsTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'systemName',
    headerName: 'System name',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.systemName || ''}`,
    sortable: true,
  },
  { field: 'systemEmail', headerName: 'System Email', width: 150 },
  { field: 'systemTitle', headerName: 'System Title', width: 150 },
  { field: 'address', headerName: 'Address', width: 150 },
  { field: 'PhoneNo', headerName: 'Phone No', width: 120 },
  { field: 'paypalEmail', headerName: 'Paypal Email', width: 150 },
  {
    field: 'options',
    headerName: 'Options',
    width: 80,
    sortable: false,
    renderCell: (params: any) => {
      return <EditBtn params={params} />
    },
  },
]
export const ManageNoticeboardTable = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'title',
    headerName: 'Title',
    width: 300,
    valueGetter: (params: GridValueGetterParams) => `${params.row.title || ''}`,
    sortable: true,
  },
  { field: 'notice', headerName: 'Notice', width: 400 },
  { field: 'date', headerName: 'Date', width: 150 },
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

export const ManageProfileTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''}`,
    sortable: true,
  },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'address', headerName: 'Address', width: 200 },
  { field: 'PhoneNo', headerName: 'Phone No', width: 200 },
  {
    field: 'options',
    headerName: 'Options',
    width: 80,
    sortable: false,
    renderCell: (params: any) => {
      return <EditBtn params={params} />
    },
  },
]

export const ResetPasswordTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''}`,
    sortable: true,
  },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'address', headerName: 'Address', width: 200 },
  { field: 'PhoneNo', headerName: 'Phone No', width: 200 },
  {
    field: 'options',
    headerName: 'Options',
    width: 80,
    sortable: false,
    renderCell: (params: any) => {
      return <EditBtn params={params} />
    },
  },
]

export const ManageAppointmentTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'date',
    headerName: 'Date',
    width: 300,

    sortable: true,
  },
  { field: 'patient', headerName: 'Patient', width: 200 },
  { field: 'doctor', headerName: 'Doctor', width: 200 },
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
export const PatientAppointmentTable = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'date',
    headerName: 'Date',
    width: 300,

    sortable: true,
  },
  { field: 'doctor', headerName: 'Doctor', width: 300 },
  { field: 'department', headerName: 'Department', width: 300 },
]

export const ManagePrescriptionTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'date',
    headerName: 'Date',
    width: 300,

    sortable: true,
  },
  { field: 'patient', headerName: 'Patient', width: 200 },
  { field: 'doctor', headerName: 'Doctor', width: 200 },
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
export const ViewPrescriptionTable = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'date',
    headerName: 'Date',
    width: 300,

    sortable: true,
  },
  { field: 'patient', headerName: 'Patient', width: 300 },
  { field: 'doctor', headerName: 'Doctor', width: 300 },
]
export const BedAllotmentTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'bedNo',
    headerName: 'Bed No',
    width: 100,

    sortable: true,
  },
  {
    field: 'bedType',
    headerName: 'Bed Type',
    width: 100,

    sortable: true,
  },
  { field: 'patient', headerName: 'Patient', width: 230 },
  { field: 'allotmentDate', headerName: 'Allotment Date', width: 230 },
  {
    field: 'probableDischargeDate',
    headerName: 'Probable Discharge Date',
    width: 230,
  },
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
export const ProvideMedicationTable = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'date',
    headerName: 'Date',
    width: 200,

    sortable: true,
  },

  { field: 'patient', headerName: 'Patient', width: 200 },
  { field: 'pharmacistNote', headerName: 'Pharmacist Note', width: 300 },
  { field: 'doctor', headerName: 'Doctor', width: 200 },

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
// export const ViewAppointment = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   {
//     field: 'time',
//     headerName: 'Time',
//     width: 400,
//     valueGetter: (params: GridValueGetterParams) => `${params.row.time || ''}`,
//     sortable: true,
//   },
//   { field: 'doctor', headerName: 'Doctor', width: 200 },
//   { field: 'patient', headerName: 'Patient', width: 200 },
// ]
