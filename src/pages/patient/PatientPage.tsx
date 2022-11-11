import { useRef } from 'react'
import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import useOutsideAlerter from '../../utils/customHooks/UseOutsideAlert'
import { patientpageProperties } from '../../utils/lists/pageProperties/pageProperties'
import './patientPage.css'

const PatientPage = () => {
  const wrapperRef = useRef(null)

  useOutsideAlerter(wrapperRef)
  return (
    <div className='patientPageMain' ref={wrapperRef}>
      <TopBar />
      <ListContainer pageProperties={{ ...patientpageProperties }} />
    </div>
  )
}

export default PatientPage
