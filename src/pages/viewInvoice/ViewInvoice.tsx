import './viewInvoice.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { viewInvoicePageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ViewInvoice = () => {
  return (
    <div className='viewPaymentPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewInvoicePageProperties }} />
    </div>
  )
}

export default ViewInvoice
