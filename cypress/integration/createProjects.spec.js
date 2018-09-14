
const date = new Date()
const random = ` - ${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
describe('Test', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check if logged in', () => {
    cy.visit('/')
    cy.get('.PwHxV6Jcxu_dL2YvCwSo1')
      .should('contain', 'Workfeed')
  })

  it('Create new List Project', () => {
    cy.get(':nth-child(2) > ._19UZnN5BBLT6G7LLA3TZBV > button').click({ force: true })
    cy.get('._3np4i0aFBcppMVX7Cjzl8L > .RuqXLo-57yJjOeHsERYyu').find('input').clear({ force: true }).type(`testProject${random}`, { force: true })
    cy.get(':nth-child(2) > .FEjqTaZuPoaDj12XOXJPz').click({ force: true })
    //choose list project
    cy.get('.cEKqEMVGs6VJu3SuvICRf > :nth-child(1)').find('input').click({ force: true })
    cy.get(':nth-child(1) > ._2En6CLZr5pD-f25ONMEeaL > .material-icons').click({ force: true })
    cy.get('._1psczQZI6XDot71SVqCsUo > button > :nth-child(1) > div').click({ force: true })
    cy.wait(2000)
  })

  it('Check if List Project was created', () => {
    cy.visit('/')
    cy.contains('My Team').click({ force: true })
    cy.wait(2000)
    cy.get('.KzroKoKaQaqeAkNxdbZ12')
      .should('contain', `testProject${random}`)
  })

  it('Create new Kanban Project', () => {
    cy.visit('/')
    cy.get(':nth-child(2) > ._19UZnN5BBLT6G7LLA3TZBV > button').click({ force: true })
    cy.get('._3np4i0aFBcppMVX7Cjzl8L > .RuqXLo-57yJjOeHsERYyu').find('input').clear({ force: true }).type(`testProjectKanban${random}`, { force: true })
    //choose kanban project
    cy.get('.cEKqEMVGs6VJu3SuvICRf > :nth-child(2)').find('input').click({ force: true })
    cy.get(':nth-child(15) > .FEjqTaZuPoaDj12XOXJPz').click({ force: true })
    cy.get(':nth-child(15) > ._2En6CLZr5pD-f25ONMEeaL > .material-icons').click({ force: true })
    cy.get('._1psczQZI6XDot71SVqCsUo > button > :nth-child(1) > div').click({ force: true })
    cy.wait(2000)
  })

  it('Check if Kanban Project was created', () => {
    cy.visit('/')
    cy.contains('My Team').click({ force: true })
    cy.wait(2000)
    cy.get('.KzroKoKaQaqeAkNxdbZ12')
      .should('contain', `testProjectKanban${random}`)
  })

  it('Create new Gantt Project', () => {
    cy.visit('/')
    cy.get(':nth-child(2) > ._19UZnN5BBLT6G7LLA3TZBV > button').click({ force: true })
    cy.get('._3np4i0aFBcppMVX7Cjzl8L > .RuqXLo-57yJjOeHsERYyu').find('input').clear({ force: true }).type(`testProjectGantt${random}`, { force: true })
    cy.get('[style="margin-left: 10px;"]').find('input').click({ force: true })
    cy.get(':nth-child(12) > .FEjqTaZuPoaDj12XOXJPz').click({ force: true })
    cy.get(':nth-child(11) > ._2En6CLZr5pD-f25ONMEeaL > .material-icons').click({ force: true })
    cy.get('._1psczQZI6XDot71SVqCsUo > button > :nth-child(1) > div').click({ force: true })
    cy.wait(3000)
  })

  it('Check if Gantt Project was created', () => {
    cy.visit('/')
    cy.get('.bHJi72jPFV8Tk7tNiBn5M > button > :nth-child(1) > svg').click({ force: true })
    cy.get('[style="opacity: 1; transform: scaleY(1); transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;"] > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    cy.wait(1000)
    cy.contains('My Team').click({ force: true })
    cy.wait(2000)
    cy.get('.KzroKoKaQaqeAkNxdbZ12')
      .should('contain', `testProjectGantt${random}`)
  })
})
