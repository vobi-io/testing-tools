const date = new Date()
const random = ` - ${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
const SectionName = `Section${random}`
const TaskName = `Task${random}`

describe('Test', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Visit the Page', () => {
    cy.visit('/')
    cy.get('.PwHxV6Jcxu_dL2YvCwSo1')
      .should('contain', 'Workfeed')
  })

  it('Choose The Kanban Project and add Task', () => {
    // cy.get('._37_4CLCG3lXfv2A7xy38_t > :nth-child(1) > [style="background-color: rgba(0, 0, 0, 0);"] > ._2pivzi9v6SeLAH47aDsxSU').click({ force: true })
    cy.contains('Kanban').click({ force: true })
    cy.wait(3000)
    cy.get('.bHJi72jPFV8Tk7tNiBn5M > button').click({ force: true })
    cy.get('[style="opacity: 1; transform: scaleY(1); transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;"] > :nth-child(1) > :nth-child(1) > :nth-child(2)')
    .click({ force: true })
    cy.get('.ElDMbK6Bn-gyZ72zyhlMU').click({ force: true })
    cy.get('.dK6axWNGGTN86a2o4-cvV').find('input').type(SectionName, { force: true })
    cy.wait(1000)
    cy.contains('Kanban').click({ force: true })
    cy.wait(2000)
  })
})
