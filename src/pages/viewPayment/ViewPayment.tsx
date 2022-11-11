import './viewPayment.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { viewPaymentPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ViewPayment = () => {
  return (
    <div className='viewPaymentPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewPaymentPageProperties }} />
    </div>
  )
}

export default ViewPayment
