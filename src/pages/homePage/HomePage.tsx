import { RootState } from '../../utils/redux/store'
import { useSelector } from 'react-redux'
import Sidebar from '../../components/sidebar/Sidebar'
import './homePage.css'
import TopBar from '../../components/topBar/TopBar'
import CardsWrapper from '../../components/cardsWrapper/CardsWrapper'
import InfoWrapper from '../../components/infoWrapper/InfoWrapper'

const HomePage = () => {
  const loggedInUser = useSelector((state: RootState) => state.user.user)

  console.log(loggedInUser)
  return (
    <div className='homePageWrapper'>
      <Sidebar />

      <div className='main'>
        <TopBar />
        <div className='mainContentWrapper'>
          <CardsWrapper />
          <InfoWrapper />
        </div>
      </div>
    </div>
  )
}

export default HomePage
