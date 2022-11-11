import './viewDeathReport.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { viewDeathReportPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ViewDeathReport = () => {
  return (
    <div className='viewDeathReportPage'>
      <TopBar />
      <ListContainer pageProperties={{ ...viewDeathReportPageProperties }} />
    </div>
  )
}

export default ViewDeathReport
