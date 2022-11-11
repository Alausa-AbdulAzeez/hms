import {
  adminCardContentList,
  CardContentType,
  doctorCardContentList,
} from '../../utils/lists/cardContentList'
import { useState, useEffect } from 'react'

import Card from '../card/Card'
import './cardsWrapper.css'
import { RootState } from '../../utils/redux/store'
import { useSelector } from 'react-redux'

const CardsWrapper = () => {
  const [inputData, setInputData] = useState<CardContentType>([])
  const loggedInUser = useSelector((state: RootState) => state.user.user)

  useEffect(() => {
    const setColumnData = () => {
      if (loggedInUser.role === 'Admin') {
        setInputData(adminCardContentList)
      }
      if (loggedInUser.role === 'Doctor') {
        setInputData(doctorCardContentList)
      }
    }
    setColumnData()
  }, [loggedInUser])
  return (
    <div className='cardsWrapper'>
      {inputData.map((singleCard, index) => {
        return <Card singleCard={singleCard} key={index} />
      })}
    </div>
  )
}

export default CardsWrapper
