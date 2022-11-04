import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import './nursePage.css'

const NursePage = () => {
  return (
    <div className='nurseMain'>
      <TopBar />
      <ListContainer page='Nurse' />
    </div>
  )
}

export default NursePage
