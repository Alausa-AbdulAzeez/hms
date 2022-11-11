import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { departmentPageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './departmentPage.css'

const DepartmentPage = () => {
  return (
    <div className='departmentMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...departmentPageProperties }} />
    </div>
  )
}

export default DepartmentPage
