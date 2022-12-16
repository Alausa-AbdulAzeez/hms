import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { viewDoctorPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './viewDoctor.css'
const ViewDoctor = () => {
  return (
    <div className='doctorMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewDoctorPageProperties }} />
    </div>
  )
}

export default ViewDoctor
