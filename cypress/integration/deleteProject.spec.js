describe('Delete Project', () => {
  beforeEach(() => {
    cy.login()
  })
  it('Visit The Page', () => {
    cy.visit('/')
  })
  it('Delete Project', () => {
    cy.get(':nth-child(1) > :nth-child(2) > [style="background-color: rgba(0, 0, 0, 0);"] > ._2pivzi9v6SeLAH47aDsxSU').click({ force: true })
    cy.contains('test').click({ force: true })
    cy.get('[style="width: 100%; background: white; white-space: nowrap; display: flex; margin: 0px auto; color: gray; text-align: center; height: 40px;"] > :nth-child(5) > :nth-child(1) > div').click({ force: true })
    cy.get('[style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center;"] > :nth-child(3)').click({ force: true})
    cy.wait(2000)
    cy.get('[style="box-sizing: border-box; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 8px; width: 100%; text-align: right; margin-top: 0px;"] > :nth-child(2) > div').click()
    cy.wait(1000)
  })
})