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
    <div
      className='cardContainer
      '
      style={{ backgroundColor: props.singleCard.color }}
    >
      {props.singleCard.icon}
      <p className='cardTitle'>{props.singleCard.title}</p>
    </div>
  )
}

export default Card
