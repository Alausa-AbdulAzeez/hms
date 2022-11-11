import './resetPassword.css'
import TopBar from '../../components/topBar/TopBar'
import ListContainer from '../../components/listContainer/ListContainer'
import { resetPasswordPageProperties } from '../../utils/lists/pageProperties/pageProperties'

const ResetPassword = () => {
  return (
    <div className='resetPasswordPageMain'>
      <TopBar />
      <ListContainer pageProperties={{ ...resetPasswordPageProperties }} />
    </div>
  )
}

export default ResetPassword
