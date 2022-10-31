import ListContainer from '../../components/listContainer/ListContainer'
import Sidebar from '../../components/sidebar/Sidebar'
import TopBar from '../../components/topBar/TopBar'
import './departmentPage.css'

const DepartmentPage = () => {
  return (
    <div className='departmentPageWrapper'>
      <Sidebar />

      <div className='departmentMain'>
        <TopBar />
        <ListContainer page='Department' />
      </div>
    </div>
  )
}

export default DepartmentPage
