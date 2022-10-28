import FullCalendar from '@fullcalendar/react'
import 'react-calendar/dist/Calendar.css'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import './infoWrapper.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import NoticeBoard from '../noticeBoard/NoticeBoard'

const localizer = momentLocalizer(moment)

const InfoWrapper = () => {
  console.log(moment().toDate())

  // const [myEventsList, setMyEventsList] = useState([
  // {
  //   start: moment().toDate(),
  //   end: moment().toDate(),
  //   title: 'Some title avhjk cvlJ',
  // },
  // ])
  const myEventsList = [
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: 'Some title avhjk cvlJ',
    },
  ]
  return (
    <div className='infoWrapper'>
      <div className='calendar'>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor='start'
          endAccessor='end'
          style={{
            height: 600,
            width: 700,
            zIndex: 0,
            backgroundColor: 'aliceblue',
          }}
        />
      </div>
      <NoticeBoard />
    </div>
  )
}

export default InfoWrapper
