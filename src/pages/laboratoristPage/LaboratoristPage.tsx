import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { laboratoristPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './laboratoristPage.css'

const LaboratoristPage = () => {
  return (
    <div className='LaboratoristMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...laboratoristPageProperties }} />
    </div>
  )
}

export default LaboratoristPage
