const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    args: ['--start-fullscreen'],
    defaultViewport: {
      width: 1437,
      height: 768
    }
  });

  // ブラウザを開く
  const page = await browser.newPage();
  // yahooへGOGO
  await page.goto('https://www.yahoo.co.jp');

  // 検索内容 入力
  await page.type('#ContentWrapper > header > section > div > form > fieldset > span > input', '金麦')
  // 検索ボタンクリック
  await page.click('#ContentWrapper > header > section > div > form > fieldset > span > button')

  //await browser.close();
})();
