import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setEditFalse } from '../redux/globalVariables'
import { AppDispatch } from '../redux/store'

function useOutsideAlerter(ref: any) {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && ref.current.contains(event.target)) {
        console.log('You clicked outside of me!')
        dispatch(setEditFalse())
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, dispatch])
}

export default useOutsideAlerter
