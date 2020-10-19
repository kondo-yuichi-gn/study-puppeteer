const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    // devtools: true,
    headless: false,
    slowMo: 250,
    args: ['--start-fullscreen']
  })
  const page = await browser.newPage()

  // -----------------------
  // タスクマネージャー へGOGO
  // -----------------------
  await page.goto('https://sb.task-manager.jp', { waitUntil: 'networkidle2' })


  // CASSO に飛ばされるので、ID/PW入力
  await page.type('#username', 'B05357')
  await page.type('#password', '')
  // サインオン ボタンクリック
  await page.click('.ping-button')

  // -----------------------
  // タスク一覧画面
  // -----------------------
  await page.waitForSelector('.tasks')

  // ヘッダーメニューの「SEM」をクリック
  await page.click('header > div > button:nth-child(3)')

  await page.waitForSelector('.plan')

  // -----------------------
  // 施策選択画面
  // -----------------------
  // クライアント選択
  await page.type('form > div:nth-child(1) input', 'アドマネジメント')
  await page.click('.v-select-list > div > div:nth-child(1)')

  // 施策カテゴリ選択
  await page.type('form > div:nth-child(2) input', 'TD')
  await page.click('.v-menu__content.menuable__content__active.v-autocomplete__content')

  // 施策選択
  await page.click('form > div:nth-child(3) div.v-input__slot > div > div:nth-child(2)')

  // タスク名入力
  await page.type('form > div:nth-child(4) input', 'あ')

  // 次へ ボタン
  await page.click('button.info')

  // -----------------------
  // アカウント選択画面
  // -----------------------
  // アカウントの全チェック
  // await page.waitForNavigation({ waitUntil: 'networkidle2' })
  await page.waitForSelector('#app > div > div > div > section > div > div.pa-0.mr-3.col > div.v-data-table.theme--light > div.v-data-table__wrapper > table > tbody > tr:nth-child(1) > td:nth-child(1)')
  await page.waitForSelector('#app > div > div > div > section > div > div.pa-0.mr-3.col > div.v-data-table.theme--light > div.v-data-table__wrapper > table > thead > tr > th:nth-child(1) > div > div')
  await page.click('#app > div > div > div > section > div > div.pa-0.mr-3.col > div.v-data-table.theme--light > div.v-data-table__wrapper > table > thead > tr > th:nth-child(1) > div > div')
  await page.click('button.info') // 次へ

  // -----------------------
  // 依頼モード選択
  // -----------------------
  // 「条件選択モード」をクリック
  await page.waitForSelector('#app > div > div > div > div.py-7.col > div > div > div.v-input__slot > div > div:nth-child(7) > div > div')
  await page.click('#app > div > div > div > div.py-7.col > div > div > div.v-input__slot > div > div:nth-child(7) > div > div')
  await page.click('button.info') // 次へ

  // -----------------------
  // 条件選択
  // -----------------------
  // 「TDを指定する」をクリック
  await page.waitForSelector('#app > div > div > div > form:nth-child(3) > div > div > div.v-input__slot > div > div:nth-child(1) > div > div')
  await page.click('#app > div > div > div > form:nth-child(3) > div > div > div.v-input__slot > div > div:nth-child(1) > div > div')

  // 「TD内の文言」入力
  await page.type('#app > div > div > div > form:nth-child(4) > div:nth-child(1) > div > div > div > div > div.width-400px > div > div > div.v-input__slot > div input', 'あああ')

  // 「を含む」を選択
  await page.click('#app > div.v-application--wrap > div > div > form:nth-child(4) > div:nth-child(1) > div > div > div > div > div.width-300px.ml-3 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
  await page.click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > div')

  // 「オフ」を選択
  await page.click('#app > div > div > div > form:nth-child(4) > div:nth-child(1) > div > div > div > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
  await page.click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1)')

  await page.click('button.info') // 次へ

  // -----------------------
  // 希望期日入力画面
  // -----------------------

  // 対応完了期日 入力
  await page.click('#app > div.v-application--wrap > div > div > div:nth-child(3) > div:nth-child(1) > div.col.col-4 > div > form > div > div.v-input__control > div.v-input__slot > div > input')
  await page.click('#app > div.v-menu__content.theme--light.menuable__content__active > div.v-picker.v-card.v-picker--date.theme--light > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(5) > td:nth-child(7) > button')
  await page.click('#app > div.v-menu__content.theme--light.menuable__content__active > div.layout.white.pa-2.justify-end > button.v-btn.v-btn--contained.theme--light.v-size--default.primary > span')

  // 反映希望日 入力
  await page.click('#app > div.v-application--wrap > div > div > div:nth-child(3) > div:nth-child(2) > div.col.col-4 > div > form > div > div.v-input__control > div.v-input__slot > div > input')
  await page.click('#app > div.v-menu__content.theme--light.menuable__content__active > div.v-picker.v-card.v-picker--date.theme--light > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(5) > td:nth-child(7) > button')
  await page.click('#app > div.v-menu__content.theme--light.menuable__content__active > div.layout.white.pa-2.justify-end > button.v-btn.v-btn--contained.theme--light.v-size--default.primary > span')

  // チャットワーク選択
  await page.click('#app > div.v-application--wrap > div > div > div:nth-child(3) > div:nth-child(3) > div.col.col-6 > form > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
  await page.click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1)')
  await page.click('button.info') // 次へ

  // -----------------------
  // 確認画面
  // -----------------------
  await page.waitForSelector('.confirm')
  await page.click('button.info') // 送信
  await page.click('button.primary') // OK

  // debugger
  await browser.close();
})()
