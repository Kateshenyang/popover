import puppeteer from 'puppeteer';

describe('Popover', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ 
      headless: "new",
      executablePath: puppeteer.executablePath()
    });
    page = await browser.newPage();
    await page.goto('http://localhost:9000');
  }, 30000);

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  test('should show and hide the popover', async () => {
    await page.click('.btn-danger');
    let tooltip = await page.$('.tooltip');
    expect(tooltip).not.toBeNull();

    let isVisible = await page.evaluate(el => !!el && window.getComputedStyle(el).visibility !== 'hidden' && window.getComputedStyle(el).display !== 'none', tooltip);
    expect(isVisible).toBe(true);

    await page.click('.btn-danger');

    await page.waitForSelector('.tooltip', { hidden: true });

    tooltip = await page.$('.tooltip');
    isVisible = await page.evaluate(el => !!el && window.getComputedStyle(el).visibility !== 'hidden' && window.getComputedStyle(el).display !== 'none', tooltip);
    expect(isVisible).toBe(false);
  }, 30000);
});