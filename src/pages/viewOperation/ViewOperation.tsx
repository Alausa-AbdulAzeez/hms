import './viewOperation.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { viewOperationPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ViewOperation = () => {
  return (
    <div className='viewPaymentPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewOperationPageProperties }} />
    </div>
  )
}

export default ViewOperation
