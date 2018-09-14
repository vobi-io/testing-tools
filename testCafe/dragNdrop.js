import { Selector, ClientFunction } from 'testcafe'

const config = require('./config-production')

const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));

const project = Selector('#app > div > div.mRNZAZaJ5En0z-jzAw1cs > div._1gzzuW9ZGJjiDqPPYG1ATR > div.ajBfnKLUWFSM2jBGiDpPq > div > div > div:nth-child(2) > div._37_4CLCG3lXfv2A7xy38_t').child(0)
const taskToDrag = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(1) > div.sc-bwzfXH.gQiQbM > div > div > div').child(0)
const taskToDragBack = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(2) > div.sc-bwzfXH.gQiQbM > div > div > div').child(0)
const drop = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(2) > div.sc-bwzfXH.gQiQbM > div > div > div')
const dropBack = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(1) > div.sc-bwzfXH.gQiQbM > div > div > div')


fixture `drag and drop`
  .page `${config.baseUrl}`
  .beforeEach( async t => {
    await localStorageSet('token', config.token)
    await localStorageSet('actualTeamId', config.actualTeamId)
    await localStorageSet('version', config.version)
  })


test('Drag and Drop', async t => {
  await t
  .navigateTo(`${config.baseUrl}`)
  .wait(2000)
  .click(project)
  //drag elements in other section
  const quantityOfTasksBefore = await Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(1) > div.sc-bwzfXH.gQiQbM > div > div > div').childElementCount
  const textBefore = taskToDrag.innerText
  for (var i = 0; i < 2; i++) {
    await t.dragToElement(taskToDrag, drop, { speed: 0.5 })
    const textAfter = taskToDrag.innerText
    await t.expect(textBefore).notEql(textAfter)
  }

  // drag elements back in the first Section
  const textBeforeBack = taskToDragBack.innerText

  for (var i = 0; i < 3; i++) {
    await t.dragToElement(taskToDragBack, dropBack, { speed: 0.5 })
    const textAfterBack = taskToDragBack.innerText
    await t.expect(textBeforeBack).notEql(textAfterBack)
  }

  //Reload the page
  await t.eval(() => location.reload(true))

  //check if they are dragged after the reload

  const quantityOfTasksAfter = await Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(1) > div.sc-bwzfXH.gQiQbM > div > div > div').childElementCount

  await t.expect(quantityOfTasksBefore).notEql(quantityOfTasksAfter)
  await t.wait(2000)
})