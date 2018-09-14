import { Selector, ClientFunction } from 'testcafe'

const config = require('./config-production')

const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val))

const project = Selector('#app > div > div.mRNZAZaJ5En0z-jzAw1cs > div._1gzzuW9ZGJjiDqPPYG1ATR > div.ajBfnKLUWFSM2jBGiDpPq > div > div > div:nth-child(2) > div._37_4CLCG3lXfv2A7xy38_t').child(0)
const firstSection = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(1) > div.sc-bZQynM.fDjqXs > div > div._3vJ1aPM45lABvJYCm2okwd > div._1mVPRWUJQbb2gLEI28Js1h')
const secondSection = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(2) > div.sc-bZQynM.fDjqXs > div > div._3vJ1aPM45lABvJYCm2okwd > div._1mVPRWUJQbb2gLEI28Js1h')
const thirdSection = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(3) > div.sc-bZQynM.fDjqXs > div > div._3vJ1aPM45lABvJYCm2okwd > div._1mVPRWUJQbb2gLEI28Js1h')

fixture (`section drag`)
  .page `${config.baseUrl}`
  .beforeEach( async t => {
    await localStorageSet('token', config.token)
    await localStorageSet('actualTeamId', config.actualTeamId)
    await localStorageSet('version', config.version)
  })


test('Drag Section', async t => {
  await t
  .navigateTo(`${config.baseUrl}`)
  
  .wait(2000)   
  .click(project)
  .wait(1000)
  const check = Selector('#scrollContainer > div > div.f3hTAxODW5IhPnNExt_Ju > div.sc-htoDjs.kSqCgo > div:nth-child(1) > div.sc-bZQynM.fDjqXs > div > div._3vJ1aPM45lABvJYCm2okwd > div._3YRBMdXzbuaH0ppxjuZl6C > div').child(1).value
  await t
  .dragToElement(firstSection, secondSection, { speed: 0.5 }).wait(1000)
  .click(project)
  .wait(1000)
  .expect(check).eql('New')
  .dragToElement(thirdSection, firstSection, { speed: 0.5 }).wait(1000)
  .click(project)
  .expect(check).eql('DragTest')
  .dragToElement(firstSection, thirdSection, { speed: 0.5 }).wait(1000)
  .click(project)
  .expect(check).eql('New')
  .dragToElement(secondSection, firstSection, { speed: 0.5 }).wait(1000)
  .wait(3000)
})  
