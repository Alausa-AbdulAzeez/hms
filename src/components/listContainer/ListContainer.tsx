import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Table from '../table/Table'
import './listContainer.css'

const ListContainer = () => {
  return (
    <div className='listContainerWrapper'>
      <div className='listContainerWrapperTitles'>
        <div className='listContainerWrapperTitle'>
          <FontAwesomeIcon icon={faBars} />
          <p className='listTitle'>Department List</p>
        </div>
        <div className='listContainerWrapperTitle'>
          <FontAwesomeIcon icon={faBars} />
          <p className='listTitle'>Department List</p>
        </div>
      </div>
      <div className=''>
        <Table />
      </div>
    </div>
  )
}

export default ListContainer
