import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { title } from 'process'
import { MouseEvent, useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEditFalse } from '../../utils/redux/globalVariables'
import { AppDispatch, RootState } from '../../utils/redux/store'
import { PagePropertiesType } from '../../utils/types/types'
import Form from '../form/Form'
import DataTable from '../table/Table'

import './listContainer.css'

type PageType = {
  pageProperties: {
    firstTitle: string
    secondTitle?: string
    showList: boolean
    showTable?: boolean
    title?: string
    titlesList?: {
      title: string
      icon: JSX.Element
      element: JSX.Element
    }[]
  }
}

const ListContainer = (props: PageType) => {
  const dispatch: AppDispatch = useDispatch()
  const titleRef = useRef(null)

  const [showTable, setShowTable] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [display, setDisplay] = useState<JSX.Element>(<DataTable />)
  const [clickedNav, setClickedNav] = useState(false)
  const [activeNav, setActiveNav] = useState<HTMLDivElement>()

  const showEditState = useSelector(
    (state: RootState) => state.showEditState.showEdit
  )

  const handleSetShowTable = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    actionType: string,
    singleTitle: string
  ) => {
    setClickedNav(true)
    if (event.currentTarget.dataset.id === singleTitle) {
      // event.currentTarget.classList.add('activeTab')

      setActiveNav(event.currentTarget)
    }
    if (actionType === 'departmentList') {
      setShowTable(true)
      setShowForm(false)
      showEditState && dispatch(setEditFalse())
    }
    if (actionType === 'addDepartment') {
      setShowTable(false)
      setShowForm(true)
      showEditState && dispatch(setEditFalse())
    }
    props.pageProperties.titlesList?.map((currentItem) => {
      if (currentItem.title === singleTitle) {
        return setDisplay(currentItem.element)
      }
    })
  }

  useEffect(() => {}, [clickedNav])

  return (
    <div className='listContainerWrapper'>
      <div className='listContainerWrapperTitles'>
        {props.pageProperties.titlesList?.map((singleItem, index) => {
          return !clickedNav ? (
            <div
              key={index}
              className={
                props.pageProperties.titlesList?.[0].title === singleItem.title
                  ? // activeNav?.dataset.id === singleItem.title
                    'listContainerWrapperTitle activeTab'
                  : 'listContainerWrapperTitle'
              }
              onClick={(event) =>
                handleSetShowTable(event, 'departmentList', singleItem.title)
              }
              ref={titleRef}
              data-id={singleItem.title}
            >
              {singleItem.icon}
              <p className='listTitle'>{singleItem.title}</p>
              {/* <p className='listTitle'>{props.pageProperties.firstTitle}</p> */}
            </div>
          ) : (
            <div
              key={index}
              className={
                activeNav?.dataset.id === singleItem.title
                  ? 'listContainerWrapperTitle activeTab'
                  : 'listContainerWrapperTitle'
              }
              onClick={(event) =>
                handleSetShowTable(event, 'departmentList', singleItem.title)
              }
              ref={titleRef}
              data-id={singleItem.title}
            >
              {singleItem.icon}
              <p className='listTitle'>{singleItem.title}</p>
              {/* <p className='listTitle'>{props.pageProperties.firstTitle}</p> */}
            </div>
          )
        })}
        {/* {props.pageProperties.showTable && (
          <div
            className={
              showTable && !showEditState
                ? 'listContainerWrapperTitle activeTab'
                : 'listContainerWrapperTitle '
            }
            onClick={() => handleSetShowTable('departmentList')}
          >
            <FontAwesomeIcon icon={faBars} />
            <p className='listTitle'>{props.pageProperties.firstTitle}</p>
          </div>
        )} */}
        {/* {props.pageProperties.showList && (
          <div
            className={
              !showForm
                ? 'listContainerWrapperTitle'
                : 'listContainerWrapperTitle activeTab'
            }
            onClick={() => handleSetShowTable('addDepartment')}
          >
            <FontAwesomeIcon icon={faPlus} />
            <p className='listTitle'> {props.pageProperties.secondTitle}</p>
          </div>
        )} */}
        {showEditState && (
          <div
            className='listContainerWrapperTitle activeTab'
            // onClick={() => handleSetShowTable('addDepartment')}
          >
            <FontAwesomeIcon icon={faPlus} />
            <p className='listTitle'>Edit {props.pageProperties.title}</p>
          </div>
        )}
      </div>

      {/* <div>{!showEditState && showTable && <DataTable />}</div> */}

      {/* <div>
        {!showEditState && showForm && (
          <Form edit='false' title={props.pageProperties.title} />
        )}
      </div> */}
      {!showEditState && display}
      <div>
        {showEditState && (
          <Form edit='true' title={props.pageProperties.title} />
        )}
      </div>
    </div>
  )
}

export default ListContainer
