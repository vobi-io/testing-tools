
const date = new Date()
const random = ` - ${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

describe('Test', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Visit the Page', () => {
    cy.visit('/')
    cy.get('.PwHxV6Jcxu_dL2YvCwSo1')
      .should('contain', 'Workfeed')
  })

  it('Choose The Project and add Task', () => {
    //cy.get('._37_4CLCG3lXfv2A7xy38_t > :nth-child(1) > [style="background-color: rgba(0, 0, 0, 0);"] > ._2pivzi9v6SeLAH47aDsxSU').click({ force: true })
      cy.contains('test').click({ force: true })  
      cy.wait(3000)
      cy.get('._-D4veq2jMn2u0lzVr4dkw', { force: true }).find('input').type(`Bug Fix${random}{enter}`, { force: true })
  })

  it('Edit Task', () => {
    cy.get('._1MTxkUKKptqF8M4_4GNDWG > [style="display: flex; min-height: 40px; height: 100%;"] > ._3CGcC2jHAGwmrPP8Aesdra').contains(`Bug Fix${random}`).click()
    cy.get('._3WgN7w0iGKOUDBttbeE1Gu > .DraftEditor-root > .DraftEditor-editorContainer > .notranslate > [data-contents="true"] > [data-block="true"] > .public-DraftStyleDefault-block').type('Description of a task')
    //Assign Member
    cy.get('._2ICvHhzCRCKf8uKAmZ-TNg').click()
    cy.get('._1qZyXHdudwP0RWvcWLQtEw > :nth-child(1) > button').click()
    cy.get('[style="position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 2000;"]').click()

    //Choose dedline
    cy.get(':nth-child(1) > .m8gdwzGmOCVdCdoB5ZqDV').click()
    cy.wait(1000)
    cy.get('[style="display: flex; flex-direction: column; justify-content: flex-start; font-weight: 400; height: 228px; line-height: 2; position: relative; text-align: center;"] > :nth-child(3) > :nth-child(1)').click()
    cy.get(':nth-child(2) > .m8gdwzGmOCVdCdoB5ZqDV').click()
    cy.wait(1000)
    cy.get('[style="display: flex; flex-direction: column; justify-content: flex-start; font-weight: 400; height: 228px; line-height: 2; position: relative; text-align: center;"] > :nth-child(4) > :nth-child(3)').click()

    //comment 
    cy.get('._3hIjejsq1QR5mInWQFUEgg > .DraftEditor-root > .DraftEditor-editorContainer > .notranslate > [data-contents="true"] > [data-block="true"] > .public-DraftStyleDefault-block').type('Comment For the Task{enter}')
    cy.wait(1000)

    //Attack file
    // cy.get(':nth-child(3) > ._29QZTF_mwy7nP5p5qlaYAo').click()
    // cy.pause()

    cy.visit('/')
  })

  
  it('Delete Comment in the task', () => {
    // cy.get('._37_4CLCG3lXfv2A7xy38_t > :nth-child(1) > [style="background-color: rgba(0, 0, 0, 0);"] > ._2pivzi9v6SeLAH47aDsxSU').click({ force: true })
    cy.contains('test').click({ force: true })  
    cy.get('._1MTxkUKKptqF8M4_4GNDWG > [style="display: flex; min-height: 40px; height: 100%;"] > ._3CGcC2jHAGwmrPP8Aesdra').contains(`Bug Fix${random}`).click()
    cy.get('._2tIl4P08SE47TQLghgzUTp').click()
    cy.get('[style="box-sizing: border-box; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 8px; width: 100%; text-align: right; margin-top: 0px;"] > :nth-child(2) > div').click()
    cy.visit('/')
    cy.get('._37_4CLCG3lXfv2A7xy38_t > :nth-child(1) > [style="background-color: rgba(0, 0, 0, 0);"] > ._2pivzi9v6SeLAH47aDsxSU').click({ force: true })
  })
})
