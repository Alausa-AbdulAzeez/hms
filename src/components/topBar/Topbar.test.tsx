import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../utils/redux/store'
import TopBar from './TopBar'
import '@testing-library/jest-dom'

test('Title of logged in user should be rendered', () => {
  render(
    <Provider store={store}>
      <TopBar />
    </Provider>
  )
  const topBarElement = screen.getByTestId('loggedInUser')
  expect(topBarElement).toBeInTheDocument()
})

test('Person profile should be rendered', () => {
  render(
    <Provider store={store}>
      <TopBar />
    </Provider>
  )
  const userIcon = screen.getByTestId('userIcon')
  expect(userIcon).toBeInTheDocument()
})
