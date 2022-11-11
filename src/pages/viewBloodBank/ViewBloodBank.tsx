import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { viewBloodBankPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './viewBloodBank.css'

const ViewBloodBank = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewBloodBankPageProperties }} />
    </div>
  )
}

export default ViewBloodBank
