import { faHospital } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import {
  sidebarDataArray,
  sidebarItemsListType,
} from '../../utils/lists/sidebarItemsList'
import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { doctorSidebarDataArray } from '../../utils/lists/doctorSidebarData'
import { pharmacistSidebarDataArray } from '../../utils/lists/pharmacistSidebarData'
import { patientSidebarDataArray } from '../../utils/lists/patientSidebarData'
import { nurseSidebarDataArray } from '../../utils/lists/nurseSidebarData'
import { laboratoristSidebarDataArray } from '../../utils/lists/laboratoristSidebarData'
import { accountantSidebarDataArray } from '../../utils/lists/accountantSidebarData'

const Sidebar = () => {
  const [selected, setSelected] = useState<EventTarget | null>(null)
  const [sidebarData, setSidebarData] = useState<sidebarItemsListType>([])

  const loggedInUser = useSelector((state: RootState) => state.user.user)

  const handleToggle = useCallback(() => {
    const base = selected as HTMLElement | null
    base?.nextElementSibling?.classList.toggle('setDisplay')
  }, [selected])

  const handleSub = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const eventAsHtmlElement = event.target as HTMLElement

    if (eventAsHtmlElement.classList.contains('sidebarItem')) {
      setSelected(event.target)
    } else if (eventAsHtmlElement.classList.contains('sidebarItemTitle')) {
      if (eventAsHtmlElement.parentElement) {
        setSelected(eventAsHtmlElement.parentElement)
      }
    } else {
      if (eventAsHtmlElement.parentElement)
        setSelected(eventAsHtmlElement.parentElement?.parentElement)
    }

    if (
      event.target === selected ||
      eventAsHtmlElement.parentElement?.parentElement === selected
    ) {
      handleToggle()
    }
    if (eventAsHtmlElement.parentElement === selected) {
      handleToggle()
    }
  }

  useEffect(() => {
    handleToggle()
  }, [handleToggle])

  useEffect(() => {
    if (loggedInUser.role === 'Doctor') {
      setSidebarData(doctorSidebarDataArray)
    }
    if (loggedInUser.role === 'Admin') {
      setSidebarData(sidebarDataArray)
    }
    if (loggedInUser.role === 'Pharmacist') {
      setSidebarData(pharmacistSidebarDataArray)
    }
    if (loggedInUser.role === 'Patient') {
      setSidebarData(patientSidebarDataArray)
    }
    if (loggedInUser.role === 'Nurse') {
      setSidebarData(nurseSidebarDataArray)
    }
    if (loggedInUser.role === 'Laboratorist') {
      setSidebarData(laboratoristSidebarDataArray)
    }
    if (loggedInUser.role === 'Accountant') {
      setSidebarData(accountantSidebarDataArray)
    }
  }, [sidebarData, loggedInUser.role])
  return (
    <div className='sidebarWrapper'>
      <div className='sidebarTop'>
        <FontAwesomeIcon icon={faHospital} className='hospitalIcon' />
        <div className='hospitalTextIcon'>HMS</div>
      </div>
      <div className='sidebarItemsWrapper'>
        <div className='sidebarItems'>
          {sidebarData.map((singleData, index) => {
            return !singleData.hasSubList ? (
              <div className='sidebarItemWrapper' key={index}>
                <NavLink
                  to={singleData.link}
                  end={true}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          backgroundColor: 'rgba(240, 248, 255, 0.562)',
                          color: 'rgb(1, 42, 68)',
                        }
                      : undefined
                  }
                  className='sidebarItem'
                >
                  {singleData.icon}
                  <p className='sidebarItemTitle'>{singleData.title}</p>
                </NavLink>
              </div>
            ) : (
              <div className='sidebarItemWrapper' key={index}>
                <div
                  className='sidebarItem'
                  onClick={(event) => handleSub(event)}
                >
                  {singleData.icon}
                  <p className='sidebarItemTitle'>{singleData.title}</p>
                  <FontAwesomeIcon icon={faChevronDown} className='arrowDown' />
                </div>
                <div className='sidebarSubItemWrapper'>
                  {singleData.subList?.map((subListData, index) => {
                    return (
                      <div className='sidebarItem' key={index}>
                        {subListData.icon}
                        <p className='sidebarItemTitle'>{subListData.title}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
