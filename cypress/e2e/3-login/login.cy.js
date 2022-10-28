describe('login', () => {
  it('User can login', () => {
    cy.visit('/')
    cy.findByTestId(/roleTestId/i).type('Doctor')
    cy.findByTestId(/emailTestId/i).type('a@gmail.com')
    cy.findByPlaceholderText(/password/i).type('secret')
    cy.findByRole('button', { name: /login/i }).click()
  })
})
