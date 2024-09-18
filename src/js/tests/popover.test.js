import puppeteer from 'puppeteer';

describe('Popover', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8080');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should show and hide the popover', async () => {
    await page.click('.btn-danger');
    let tooltip = await page.$('.tooltip');
    expect(tooltip).not.toBeNull();

    await page.click('.btn-danger');
    tooltip = await page.$('.tooltip');
    expect(tooltip).toBeNull();
  });
});