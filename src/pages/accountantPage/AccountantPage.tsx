import './accountantPage.css'
import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'

const AccountantPage = () => {
  return (
    <div className='accountantMain'>
      <TopBar />
      <ListContainer page='Accountant' />
    </div>
  )
}

export default AccountantPage
