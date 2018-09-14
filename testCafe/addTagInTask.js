import { Selector, ClientFunction } from 'testcafe'

const config = require('./config-production')
const date = new Date()
const random = `Task Tag-${date.getMinutes()}`

const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));

const project = Selector('#app > div > div.mRNZAZaJ5En0z-jzAw1cs > div._1gzzuW9ZGJjiDqPPYG1ATR > div.ajBfnKLUWFSM2jBGiDpPq > div > div > div:nth-child(2) > div._37_4CLCG3lXfv2A7xy38_t').child(0)
const taskToAddTag = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(1) > div.sc-bwzfXH.gQiQbM > div > div > div').child(0)
const addTag = Selector('#app > div > div._3Ucot5Zi2UOD34MwgXLVAA > div > div > div._1xLMCYZ-oZBMjoBWKzv5_1 > div._1vSE6s96kgImaTPCGvOIle > div._30rwZ-hVsWLBQ9Q9QMm6hY > div._1O2Eirir8QxHcyq17SePow > div.qAPIGBLqN4LmOSjjOdQCI')
const input = Selector("input[placeholder='Add a tag']")

const containerOfTags = Selector('#react-autowhatever-1 > ul')
const toContain = Selector('#app > div > div._3Ucot5Zi2UOD34MwgXLVAA > div > div > div._1xLMCYZ-oZBMjoBWKzv5_1 > div._1vSE6s96kgImaTPCGvOIle > div._30rwZ-hVsWLBQ9Q9QMm6hY > div._1O2Eirir8QxHcyq17SePow > div.RLNumaZ9zYxPMnhJo3ABG').child()
const Tag = Selector('#\\36 e2c3920-a5d1-11e8-89ef-191cc078831a > div > div._9RrrfWx8edfcb4Uoc2cEN > div._2aTdOK8bRNomJhPVi8z8z > div._1CiD-Z5Vulk2c1FEet9PU_ > div')
const deleteTagFromTask = Selector('#\\36 e2c3920-a5d1-11e8-89ef-191cc078831a > div > div._9RrrfWx8edfcb4Uoc2cEN > div._2aTdOK8bRNomJhPVi8z8z > div._1CiD-Z5Vulk2c1FEet9PU_ > div > div')
const deleteTag = Selector('#react-autowhatever-1--item-0 > div > svg')

fixture `tag in the task`
  .page `${config.baseUrl}`
  .beforeEach( async t => {
    await localStorageSet('token', config.token)
    await localStorageSet('actualTeamId', config.actualTeamId)
    await localStorageSet('version', config.version)
})

test('Add Tag in the task', async t => {
  await t
    .navigateTo(`${config.baseUrl}`)
    .wait(2000)
    .click(project)
    .wait(1000)
    .click(taskToAddTag).wait(500)
    .click(addTag)
    .typeText(input, random)
  if (await containerOfTags.child().withText(random).exists) {
    const Tag = containerOfTags.child().withText(random)
    await t.click(Tag)
  } else {
    await t.pressKey('enter')
  }
  await t
    .expect(toContain.innerText).contains(random)
  await t.wait(3000)

})

test('Delete Tag from tast', async t => {
  await t
    .navigateTo(`${config.baseUrl}`)
    .wait(2000)
    .click(project)
    .wait(1000)
    .hover(Tag)
    .wait(1000)
    .click(deleteTagFromTask)
    .wait(2000)
    .click(taskToAddTag).wait(500)
    .click(addTag)
    .click(deleteTag)
    .expect(toContain.innerText).notContains(random)
    .wait(3000)
})