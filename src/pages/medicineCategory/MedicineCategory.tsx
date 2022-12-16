import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { medCategoryPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './medicineCategory.css'

const MedicineCategory = () => {
  return (
    <div className='departmentMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...medCategoryPageProperties }} />
    </div>
  )
}

export default MedicineCategory
