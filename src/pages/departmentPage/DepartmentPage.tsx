import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import './departmentPage.css'

const DepartmentPage = () => {
  return (
    <div className='departmentMain'>
      <TopBar />
      <ListContainer page='Department' />
    </div>
  )
}

export default DepartmentPage
