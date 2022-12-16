import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { provideMedicationPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './provideMedication.css'

const ProvideMedication = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...provideMedicationPageProperties }} />
    </div>
  )
}

export default ProvideMedication
