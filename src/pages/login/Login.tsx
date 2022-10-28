import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {
  handleChangeUser,
  handleFormSubmission,
  handleSetRoleList,
  handleSetUser,
  setBtnState,
} from '../../utils/functions/functions'
import './login.css'
import { AppDispatch } from '../../utils/redux/store'
import { rolesArray } from '../../utils/lists/rolesList'

const Register = () => {
  const [rolesList, setRolesList] = useState(false)
  const [user, setUser] = useState({
    role: '',
    email: '',
    password: '',
  })
  const [btnDisabled, setBtnDisabled] = useState(true)
  const navigate = useNavigate()

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    setBtnState(user, setBtnDisabled)
  }, [user])

  return (
    <div className='loginWrapper'>
      <div className='loginWrapperLeft'>
        <img
          src={require('../../utils/images/medicalimg.jpg')}
          alt=''
          className='loginWrapperLeftImg'
        />
      </div>
      <div className='loginWrapperRight'>
        <form
          className='loginFormWrapper'
          onSubmit={(event) =>
            handleFormSubmission(event, user, navigate, dispatch)
          }
        >
          <div className='loginHeading'>Log in</div>
          <div className='loginInputs'>
            <div className='rolesInputWrapper'>
              <input
                type='text'
                className='rolesInput'
                placeholder={user.role ? user.role : 'Select role'}
                onClick={() =>
                  handleSetRoleList('roles', setRolesList, rolesList)
                }
                onChange={(event) => handleChangeUser(event, setUser)}
                value={user.role}
                data-name='role'
                data-testid='roleTestId'
              />
              {rolesList && (
                <div className='rolesList'>
                  {rolesArray.map((role, index) => {
                    return (
                      <div
                        onClick={(event) =>
                          handleSetUser(
                            event,
                            user,
                            setUser,
                            setRolesList,
                            rolesList
                          )
                        }
                        key={index}
                      >
                        {role}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            <label htmlFor=''>Email</label>
            <input
              type='email'
              className='loginEmailInput loginInput'
              placeholder='example@****.com'
              autoComplete='on'
              onClick={() =>
                handleSetRoleList('email', setRolesList, rolesList)
              }
              onChange={(event) => handleChangeUser(event, setUser)}
              data-name='email'
              data-testid='emailTestId'
            />
            <label htmlFor=''>Password</label>
            <input
              type='password'
              className='loginPasswordInput loginInput'
              placeholder='Password'
              onClick={() =>
                handleSetRoleList('password', setRolesList, rolesList)
              }
              onChange={(event) => handleChangeUser(event, setUser)}
              data-name='password'
            />
          </div>

          <button className='loginBtn' type={'submit'} disabled={btnDisabled}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
