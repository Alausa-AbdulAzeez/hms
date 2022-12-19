import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setShowRolesFalse } from '../redux/globalVariables'
import { AppDispatch } from '../redux/store'

function useOutsideAlerterLogin(ref: any, setRolesList: any) {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('You clicked outside of me!')
        setRolesList(false)
        dispatch(setShowRolesFalse())
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, dispatch, setRolesList])
}

export default useOutsideAlerterLogin
