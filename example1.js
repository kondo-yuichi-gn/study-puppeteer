const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250
  });

  // ブラウザを開く
  const page = await browser.newPage();
  // yahooへGOGO
  await page.goto('https://www.yahoo.co.jp');
  // スクショ撮る
  await page.screenshot({path: 'example1.png'});

  await browser.close();
})();
