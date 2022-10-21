import { AppDispatch, persistor, RootState } from '../../utils/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../utils/redux/userRedux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidebar from '../../components/sidebar/Sidebar'
import './homePage.css'

const HomePage = () => {
  const loggedInUser = useSelector((state: RootState) => state.user.user)
  const dispatch: AppDispatch = useDispatch()

  console.log(loggedInUser)
  return (
    <div
      className='homePageWrapper'
      onClick={() => {
        persistor.purge()
        dispatch(logoutUser())
      }}
    >
      <Sidebar />

      <div className='main'>Main</div>
    </div>
  )
}

export default HomePage
