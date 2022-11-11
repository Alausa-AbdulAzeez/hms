import './profile.css'
import ListContainer from '../../components/listContainer/ListContainer'
import TopBar from '../../components/topBar/TopBar'
import { profilePageProperties } from '../../utils/lists/pageProperties/pageProperties'

const Profile = () => {
  return (
    <div className='profileMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...profilePageProperties }} />
    </div>
  )
}

export default Profile
