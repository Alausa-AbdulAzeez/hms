import { Link } from 'react-router-dom'
import './card.css'

export type SingleCardType = {
  singleCard: {
    icon: JSX.Element
    title: string
    link: string
    color: string
  }
}

const Card = (props: SingleCardType) => {
  return (
    <Link to={props.singleCard.link}>
      <div
        className='cardContainer
      '
        style={{ backgroundColor: props.singleCard.color }}
      >
        {props.singleCard.icon}
        <p className='cardTitle'>{props.singleCard.title}</p>
      </div>
    </Link>
  )
}

export default Card
