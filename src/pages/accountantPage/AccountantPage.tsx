import './accountantPage.css'
import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { accountantPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const AccountantPage = () => {
  return (
    <div className='accountantMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...accountantPageProperties }} />
    </div>
  )
}

export default AccountantPage
