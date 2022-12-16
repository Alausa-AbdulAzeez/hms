import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { patientAppointmentPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './patientAppointment.css'

const PatientAppointment = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...patientAppointmentPageProperties }} />
    </div>
  )
}

export default PatientAppointment
