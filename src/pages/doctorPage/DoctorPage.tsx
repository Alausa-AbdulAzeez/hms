import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { doctorPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './doctorPage.css'
const DoctorPage = () => {
  return (
    <div className='doctorMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...doctorPageProperties }} />
    </div>
  )
}

export default DoctorPage
