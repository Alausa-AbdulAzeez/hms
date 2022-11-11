import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { bedAllotmentPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './bedAllotment.css'

const BedAllotment = () => {
  return (
    <div className='bedAllotmentMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...bedAllotmentPageProperties }} />
    </div>
  )
}

export default BedAllotment
