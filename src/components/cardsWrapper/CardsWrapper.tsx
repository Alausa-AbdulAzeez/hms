import { cardContentList } from '../../utils/lists/cardContentList'
import Card from '../card/Card'
import './cardsWrapper.css'

const CardsWrapper = () => {
  return (
    <div className='cardsWrapper'>
      {cardContentList.map((singleCard, index) => {
        return <Card singleCard={singleCard} key={index} />
      })}
    </div>
  )
}

export default CardsWrapper
