import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import './doctorPage.css'
const DoctorPage = () => {
  return (
    <div className='doctorMain'>
      <TopBar />
      <ListContainer page='Doctor' />
    </div>
  )
}

export default DoctorPage
