import './manageReport.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { viewPaymentPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ManageReport = () => {
  return (
    <div className='manageReportPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewPaymentPageProperties }} />
    </div>
  )
}

export default ManageReport
