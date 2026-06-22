const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  await page.goto('http://localhost:8765');
  await page.click('a[href="#experience"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'preview_light.png' });

  await page.click('#mood');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'preview_dark.png' });

  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  console.log('console errors:', errors);

  await browser.close();
})();
