import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { pharmacistPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './pharmacistPage.css'
const PharmacistPage = () => {
  return (
    <div className='pharmacistMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...pharmacistPageProperties }} />
    </div>
  )
}

export default PharmacistPage
