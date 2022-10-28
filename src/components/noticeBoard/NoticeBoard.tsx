import { faBars, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './noticeBoard.css'

const NoticeBoard = () => {
  return (
    <div className='noticeBoardWrapper'>
      <div className='noticeBoardHeader'>
        <FontAwesomeIcon icon={faBars} />
        <div className='noticeBoardTitle'>Noticeboard</div>
      </div>
      <div className='noticeBoardItems'>
        <div className='noticeBoardItem'>
          <FontAwesomeIcon icon={faTag} />
          <div className='noticeBoardText'>
            <h3 className='noticeBoardBoldText'>DEMO NOTICE TWO</h3>
            <p className='noticeBoardSubText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, laborum.
            </p>
          </div>
          <div className='noticeBoardDate'>
            29 <span>Apr</span>
          </div>
        </div>
        <div className='noticeBoardItem'>
          <FontAwesomeIcon icon={faTag} />
          <div className='noticeBoardText'>
            <h3 className='noticeBoardBoldText'>DEMO NOTICE TWO</h3>
            <p className='noticeBoardSubText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, laborum.
            </p>
          </div>
          <div className='noticeBoardDate'>
            29 <span>Apr</span>
          </div>
        </div>
        <div className='noticeBoardItem'>
          <FontAwesomeIcon icon={faTag} />
          <div className='noticeBoardText'>
            <h3 className='noticeBoardBoldText'>DEMO NOTICE TWO</h3>
            <p className='noticeBoardSubText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, laborum.
            </p>
          </div>
          <div className='noticeBoardDate'>
            29 <span>Apr</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard
