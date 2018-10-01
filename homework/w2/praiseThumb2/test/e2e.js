const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3002/index/index');
    await driver.findElement(By.id('thumb')).click();
    const _animate = driver.findElement(By.id('animation'));
    await driver.wait(_animate.isDisplayed(), 1000);
  } finally {
    await driver.quit();
  }
})();