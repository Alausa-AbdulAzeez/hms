import './accountantInvoice.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { accountantInvoicePageProperties } from '../../utils/lists/pageProperties/pageProperties'

const AccountantInvoice = () => {
  return (
    <div className='viewPaymentPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...accountantInvoicePageProperties }} />
    </div>
  )
}

export default AccountantInvoice
