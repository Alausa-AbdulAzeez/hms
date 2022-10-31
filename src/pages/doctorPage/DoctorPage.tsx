import ListContainer from '../../components/listContainer/ListContainer'
import Sidebar from '../../components/sidebar/Sidebar'
import TopBar from '../../components/topBar/TopBar'
import './doctorPage.css'
const DoctorPage = () => {
  return (
    <div className='doctorPageWrapper'>
      <Sidebar />

      <div className='doctorMain'>
        <TopBar />
        <ListContainer page='Doctor' />
      </div>
    </div>
  )
}

export default DoctorPage
