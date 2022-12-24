import "react-calendar/dist/Calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./infoWrapper.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import NoticeBoard from "../noticeBoard/NoticeBoard";

const localizer = momentLocalizer(moment);

const InfoWrapper = () => {
  const myEventsList = [
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Some title avhjk cvlJ",
    },
  ];
  return (
    <div className="infoWrapper">
      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{
            // height: 600,
            // width: 500,
            // zIndex: 0,
            backgroundColor: "aliceblue",
          }}
        />
      </div>
      <NoticeBoard />
    </div>
  );
};

export default InfoWrapper;
