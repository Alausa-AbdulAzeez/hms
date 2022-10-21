import Sidebar from '../../components/sidebar/Sidebar'
import './nursePage.css'

const NursePage = () => {
  return (
    <div className='nursePageWrapper'>
      <Sidebar />
      <div className='nurseMain'>Nurse Page</div>
    </div>
  )
}

export default NursePage
