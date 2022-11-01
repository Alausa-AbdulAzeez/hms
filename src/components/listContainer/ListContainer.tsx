import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Form from '../form/Form'
import DataTable from '../table/Table'

import './listContainer.css'

type PageType = {
  page: string
}

const ListContainer = (props: PageType) => {
  const [showTable, setShowTable] = useState(true)

  const handleSetShowTable = (actionType: string) => {
    if (actionType === 'departmentList') {
      setShowTable(true)
    }
    if (actionType === 'addDepartment') {
      setShowTable(false)
    }
  }
  return (
    <div className='listContainerWrapper'>
      <div className='listContainerWrapperTitles'>
        <div
          className={
            !showTable
              ? 'listContainerWrapperTitle'
              : 'listContainerWrapperTitle activeTab'
          }
          onClick={() => handleSetShowTable('departmentList')}
        >
          <FontAwesomeIcon icon={faBars} />
          <p className='listTitle'>{props.page} List</p>
        </div>
        <div
          className={
            showTable
              ? 'listContainerWrapperTitle'
              : 'listContainerWrapperTitle activeTab'
          }
          onClick={() => handleSetShowTable('addDepartment')}
        >
          <FontAwesomeIcon icon={faPlus} />
          <p className='listTitle'>Add {props.page}</p>
        </div>
      </div>
      <div className=''>{showTable ? <DataTable /> : <Form />}</div>
    </div>
  )
}

export default ListContainer
