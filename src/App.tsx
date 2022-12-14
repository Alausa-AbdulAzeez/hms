import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/login/Login'
import HomePage from './pages/homePage/HomePage'
import { useSelector } from 'react-redux'
import { RootState } from './utils/redux/store'
import DoctorPage from './pages/doctorPage/DoctorPage'
import DepartmentPage from './pages/departmentPage/DepartmentPage'
import PatientPage from './pages/patient/PatientPage'
import NursePage from './pages/nursePage/NursePage'
import PharmacistPage from './pages/pharmacistPage/PharmacistPage'
import LaboratoristPage from './pages/laboratoristPage/LaboratoristPage'
import AccountantPage from './pages/accountantPage/AccountantPage'
import ViewAppointment from './pages/viewAppointment/ViewAppointment'
import ViewPayment from './pages/viewPayment/ViewPayment'
import Sidebar from './components/sidebar/Sidebar'
import ViewBedStatus from './pages/viewBedStatus/ViewBedStatus'
import ViewBloodBank from './pages/viewBloodBank/ViewBloodBank'
import ViewMedicine from './pages/viewMedicine/ViewMedicine'
import ViewOperation from './pages/viewOperation/ViewOperation'
import ViewDeathReport from './pages/viewDeathReport/ViewDeathReport'
import ViewBirthReport from './pages/viewBirthReport/ViewBirthReport'
import ManageNoticeboard from './pages/manageNoticeboard/ManageNoticeboard'
import SystemSetting from './pages/systemSetting/SystemSetting'
import Profile from './pages/profile/Profile'
import ResetPassword from './pages/resetPassword/ResetPassword'
import ManageAppointment from './pages/manageAppointment/ManageAppointment'
import ManagePrescription from './pages/managePrescription/ManagePrescription'
import BedAllotment from './pages/bedAllotment/BedAllotment'
import ManageReport from './pages/manageReport/ManageReport'
import PatientAppointment from './pages/viewAppointment copy/PatientAppointment'
import ViewPrescription from './pages/viewPrescription/ViewPrescription'
import ViewDoctor from './pages/viewDoctor/ViewDoctor'
import AdmitHistory from './pages/admitHistory/AdmitHistory'
import OperationHistory from './pages/operationHistory/OperationHistory'
import ViewInvoice from './pages/viewInvoice/ViewInvoice'
import MedicineCategory from './pages/medicineCategory/MedicineCategory'
import ManageMedicine from './pages/manageMedicine/ManageMedicine'
import ProvideMedication from './pages/provideMedication/ProvideMedication'
import ManageBloodDonor from './pages/manageBloodDonor/ManageBloodDonor'
import AccountantInvoice from './pages/accountantInvoice/AccountantInvoice'

function App() {
  const loggedInUser = useSelector((state: RootState) => state.user.user)

  return (
    <BrowserRouter>
      {loggedInUser.isLoggedIn ? (
        <div className='pageWrapper'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='department' element={<DepartmentPage />} />
            <Route path='doctor' element={<DoctorPage />} />
            <Route path='patient' element={<PatientPage />} />
            <Route path='nurse' element={<NursePage />} />
            <Route path='pharmacist' element={<PharmacistPage />} />
            <Route path='laboratorist' element={<LaboratoristPage />} />
            <Route path='accountant' element={<AccountantPage />} />
            <Route path='viewAppointment' element={<ViewAppointment />} />
            <Route path='viewPayment' element={<ViewPayment />} />
            <Route path='viewBedStatus' element={<ViewBedStatus />} />
            <Route path='viewBloodBank' element={<ViewBloodBank />} />
            <Route path='viewMedicine' element={<ViewMedicine />} />
            <Route path='viewOperation' element={<ViewOperation />} />
            <Route path='viewDeathReport' element={<ViewDeathReport />} />
            <Route path='manageNoticeboard' element={<ManageNoticeboard />} />
            <Route path='systemSetting' element={<SystemSetting />} />
            <Route path='viewBirthReport' element={<ViewBirthReport />} />
            <Route path='profile' element={<Profile />} />
            <Route path='resetPassword' element={<ResetPassword />} />
            <Route path='manageAppointment' element={<ManageAppointment />} />
            <Route path='managePrescription' element={<ManagePrescription />} />
            <Route path='bedAllotment' element={<BedAllotment />} />
            <Route path='manageReport' element={<ManageReport />} />
            <Route path='patientAppointment' element={<PatientAppointment />} />
            <Route path='viewPrescription' element={<ViewPrescription />} />
            <Route path='viewDoctor' element={<ViewDoctor />} />
            <Route path='admitHistory' element={<AdmitHistory />} />
            <Route path='operationHistory' element={<OperationHistory />} />
            <Route path='viewInvoice' element={<ViewInvoice />} />
            <Route path='paymentHistory' element={<ViewPayment />} />
            <Route path='medicineCategory' element={<MedicineCategory />} />
            <Route path='manageMedicine' element={<ManageMedicine />} />
            <Route path='provideMedication' element={<ProvideMedication />} />
            <Route path='manageBloodDonor' element={<ManageBloodDonor />} />
            <Route path='invoice' element={<AccountantInvoice />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path='/*' element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
