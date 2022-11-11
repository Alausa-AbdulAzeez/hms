import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { viewAppointmentPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './viewAppointment.css'

const ViewAppointment = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewAppointmentPageProperties }} />
    </div>
  )
}

export default ViewAppointment
