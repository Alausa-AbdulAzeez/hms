import './viewPrescription.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { viewPrescriptionPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ViewPrescription = () => {
  return (
    <div className='managePrescriptionPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewPrescriptionPageProperties }} />
    </div>
  )
}

export default ViewPrescription
