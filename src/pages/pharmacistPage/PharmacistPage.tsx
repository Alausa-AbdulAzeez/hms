import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import './pharmacistPage.css'
const PharmacistPage = () => {
  return (
    <div className='pharmacistMain'>
      <TopBar />
      <ListContainer page='Pharmacist' />
    </div>
  )
}

export default PharmacistPage
