import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, persistor, RootState } from '../../utils/redux/store'
import { logoutUser } from '../../utils/redux/userRedux'
import './topBar.css'

const TopBar = () => {
  const loggedInUser = useSelector((state: RootState) => state.user.user)
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className='topbarWrapper'>
      <div className='' data-testid='loggedInUser'>
        {loggedInUser.role}
      </div>

      <FontAwesomeIcon
        icon={faUser}
        className='topbarUserIcon'
        onClick={() => {
          persistor.purge()
          dispatch(logoutUser())
        }}
        data-testid='userIcon'
      />
    </div>
  )
}

export default TopBar
