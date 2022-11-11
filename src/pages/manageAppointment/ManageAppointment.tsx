import './manageAppointment.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { manageAppointmentPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ManageAppointment = () => {
  return (
    <div className='manageAppointmentPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...manageAppointmentPageProperties }} />
    </div>
  )
}

export default ManageAppointment
