const date = new Date()
const random = ` - ${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
const todayDate = date.getDate()

describe('Task in Workfeed', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Visit the Page', () => {
    cy.visit('/')
    cy.get('.PwHxV6Jcxu_dL2YvCwSo1')
      .should('contain', 'Workfeed')
  })

  it('Create Task', () => {
    cy.get('._-D4veq2jMn2u0lzVr4dkw').find('input').type(`Task${random}{enter}`, { force: true })
    cy.wait(3000)
  })

  it('Change date to tomorrow', () => {
    cy.contains(`Task${random}`).click({ force: true })
    cy.get(':nth-child(2) > .m8gdwzGmOCVdCdoB5ZqDV').click()
    cy.get('[style="display: flex; flex-direction: column; justify-content: flex-start; font-weight: 400; height: 228px; line-height: 2; position: relative; text-align: center;"]')
      .contains(`${todayDate + 1}`).click()
      cy.wait(3000)
  })

  it('Check if date is changed', () => {
    cy.visit('/')
    cy.get(':nth-child(2) > .tuFhksHsLySWLWjRQLE1i > ._1MmpMpDCVijG3V9WCC5nqr > ._2A1WOaJTTk-RhLbwdXrx_o > button > div > svg')
      .click({ force: true })
    cy.get(':nth-child(2) > .tuFhksHsLySWLWjRQLE1i ._1MTxkUKKptqF8M4_4GNDWG').contains(`${random}`)
  })
})