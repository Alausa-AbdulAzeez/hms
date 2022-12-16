import './operationHistory.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { operationHistoryPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const OperationHistory = () => {
  return (
    <div className='viewPaymentPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...operationHistoryPageProperties }} />
    </div>
  )
}

export default OperationHistory
