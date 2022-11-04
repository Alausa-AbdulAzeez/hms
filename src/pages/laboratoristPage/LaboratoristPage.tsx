import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import './laboratoristPage.css'

const LaboratoristPage = () => {
  return (
    <div className='LaboratoristMain'>
      <TopBar />
      <ListContainer page='Laboratorist' />
    </div>
  )
}

export default LaboratoristPage
