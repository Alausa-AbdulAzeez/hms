import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { admitHistoryPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './admitHistory.css'

const AdmitHistory = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...admitHistoryPageProperties }} />
    </div>
  )
}

export default AdmitHistory
