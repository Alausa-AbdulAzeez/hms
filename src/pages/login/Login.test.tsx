import { render, screen } from '@testing-library/react'
import Login from './Login'
import '@testing-library/jest-dom'

test('role input should be rendered', () => {
  render(<Login />)
  const roleInputElement = screen.getByTestId('roleTestId')
  expect(roleInputElement).toBeInTheDocument()
})

test('email input should be rendered', () => {
  render(<Login />)
  const emailInputElement = screen.getByPlaceholderText('example@****.com')
  expect(emailInputElement).toBeInTheDocument()
})

test('password input should be rendered', () => {
  render(<Login />)
  const passwordInputElement = screen.getByPlaceholderText(/password/i)
  expect(passwordInputElement).toBeInTheDocument()
})

test('button should be rendered', () => {
  render(<Login />)
  const loginBtn = screen.getByRole('button')
  expect(loginBtn).toBeInTheDocument()
})

test('button should be disabled', () => {
  render(<Login />)
  const loginBtn = screen.getByRole('button')
  expect(loginBtn).toBeDisabled()
})
