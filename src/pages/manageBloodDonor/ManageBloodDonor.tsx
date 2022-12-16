import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { manageBloodDonorPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './manageBloodDonor.css'

const ManageBloodDonor = () => {
  return (
    <div className='main'>
      <TopBar />
      <ListContainer pageProperties={{ ...manageBloodDonorPageProperties }} />
    </div>
  )
}

export default ManageBloodDonor
