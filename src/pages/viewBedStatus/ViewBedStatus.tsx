import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { viewBedStatusPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './viewBedStatus.css'

const ViewBedStatus = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewBedStatusPageProperties }} />
    </div>
  )
}

export default ViewBedStatus
