import './homePage.css'
import TopBar from '../../components/topBar/TopBar'
import CardsWrapper from '../../components/cardsWrapper/CardsWrapper'
import InfoWrapper from '../../components/infoWrapper/InfoWrapper'
import DemoApp from '../../components/infoWrapper/InfoWrapper'

const HomePage = () => {
  return (
    <div className='main'>
      <TopBar />
      <div className='mainContentWrapper'>
        <CardsWrapper />
        {/* <InfoWrapper /> */}
        <DemoApp />
      </div>
    </div>
  )
}

export default HomePage
