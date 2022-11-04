import { useDispatch } from 'react-redux'
import { setEditTrue, setFormDetails } from '../../utils/redux/globalVariables'
import { AppDispatch } from '../../utils/redux/store'
import './editBtn.css'

type BtnProps = {
  params: any
}

const EditBtn = (props: BtnProps) => {
  const dispatch: AppDispatch = useDispatch()
  const handleShowEdit = () => {
    // console.log(props.params.row)
    dispatch(setFormDetails(props.params.row))
    dispatch(setEditTrue())
  }
  return (
    <button className='userListEdit' onClick={handleShowEdit}>
      Edit
    </button>
  )
}

export default EditBtn
