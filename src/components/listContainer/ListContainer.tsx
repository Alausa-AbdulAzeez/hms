import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useOutsideAlerter from '../../utils/customHooks/UseOutsideAlert'
import { setEditFalse } from '../../utils/redux/globalVariables'
import { AppDispatch, RootState } from '../../utils/redux/store'
import Form from '../form/Form'
import DataTable from '../table/Table'

import './listContainer.css'

type PageType = {
  page: string
}

const ListContainer = (props: PageType) => {
  const dispatch: AppDispatch = useDispatch()

  const [showTable, setShowTable] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const showEditState = useSelector(
    (state: RootState) => state.showEditState.showEdit
  )

  const handleSetShowTable = (actionType: string) => {
    if (actionType === 'departmentList') {
      setShowTable(true)
      setShowForm(false)
      showEditState && dispatch(setEditFalse())
    }
    if (actionType === 'addDepartment') {
      setShowForm(true)
      setShowTable(false)
      showEditState && dispatch(setEditFalse())
    }
  }

  return (
    <div className='listContainerWrapper'>
      <div className='listContainerWrapperTitles'>
        <div
          className={
            showTable && !showEditState
              ? 'listContainerWrapperTitle activeTab'
              : 'listContainerWrapperTitle '
          }
          onClick={() => handleSetShowTable('departmentList')}
        >
          <FontAwesomeIcon icon={faBars} />
          <p className='listTitle'>{props.page} List</p>
        </div>
        <div
          className={
            !showForm
              ? 'listContainerWrapperTitle'
              : 'listContainerWrapperTitle activeTab'
          }
          onClick={() => handleSetShowTable('addDepartment')}
        >
          <FontAwesomeIcon icon={faPlus} />
          <p className='listTitle'>Add {props.page}</p>
        </div>
        {showEditState && (
          <div
            className='listContainerWrapperTitle activeTab'
            onClick={() => handleSetShowTable('addDepartment')}
          >
            <FontAwesomeIcon icon={faPlus} />
            <p className='listTitle'>Edit {props.page}</p>
          </div>
        )}
      </div>
      <div className=''>{!showEditState && showTable && <DataTable />}</div>
      <div className=''>
        {!showEditState && showForm && <Form edit='false' />}
      </div>
      <div className=''>{showEditState && <Form edit='true' />}</div>
    </div>
  )
}

export default ListContainer
