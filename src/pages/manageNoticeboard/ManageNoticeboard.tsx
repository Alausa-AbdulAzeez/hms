import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { manageNoticeboardPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './manageNoticeboard.css'

const ManageNoticeboard = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...manageNoticeboardPageProperties }} />
    </div>
  )
}

export default ManageNoticeboard
