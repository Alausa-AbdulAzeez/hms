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
import ProfilePage from './pages/profilePage/ProfilePage'

function App() {
  const loggedInUser = useSelector((state: RootState) => state.user.user)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={loggedInUser.isLoggedIn ? <HomePage /> : <Register />}
        />
        <Route path='department' element={<DepartmentPage />} />
        <Route path='doctor' element={<DoctorPage />} />
        <Route path='patient' element={<PatientPage />} />
        <Route path='nurse' element={<NursePage />} />
        <Route path='pharmacist' element={<PharmacistPage />} />
        <Route path='laboratorist' element={<LaboratoristPage />} />
        <Route path='accountant' element={<AccountantPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
