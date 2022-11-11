import './viewBirthReport.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { viewBirthReportPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ViewBirthReport = () => {
  return (
    <div className='ViewBirthReportPage'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewBirthReportPageProperties }} />
    </div>
  )
}

export default ViewBirthReport
