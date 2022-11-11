import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { viewMedicinePageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './viewMedicine.css'

const ViewMedicine = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewMedicinePageProperties }} />
    </div>
  )
}

export default ViewMedicine
