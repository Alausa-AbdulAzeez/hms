import './managePrescription.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { managePrescriptionPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ManagePrescription = () => {
  return (
    <div className='managePrescriptionPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...managePrescriptionPageProperties }} />
    </div>
  )
}

export default ManagePrescription
