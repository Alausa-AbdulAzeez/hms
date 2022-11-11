import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { nursePageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './nursePage.css'

const NursePage = () => {
  return (
    <div className='nurseMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...nursePageProperties }} />
    </div>
  )
}

export default NursePage
