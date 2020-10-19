const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250
  });

  // ブラウザを開く
  const page = await browser.newPage();
  // yahooへGOGO
  await page.goto('https://www.yahoo.co.jp', {waitUntil: 'networkidle2'});

  // networkidle2
  // consider navigation to be finished when there are no more than 2 network connections for at least 500 ms.
  // 少なくとも500ミリ秒の間ネットワーク接続が2つ以下の場合、ナビゲーションが終了したと見なします

  // PDF作成
  await page.pdf({path: 'example2.pdf', format: 'A4'});

  await browser.close();
})();
