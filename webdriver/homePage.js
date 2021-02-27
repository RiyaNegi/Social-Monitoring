var webdriver = require('selenium-webdriver');
var By = webdriver.By
var driver;
const delay = ms => new Promise(res => setTimeout(res, ms));


class HomePage {
    constructor() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    }

    async navigatentryexit() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await delay(3000);
        await driver.findElement(By.className('exit-btn')).click();
    }

    async Validatempty() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await driver.findElement(By.name('parent')).sendKeys("this rain is perfect for an outing");
        await delay(2000);
        await driver.findElement(By.name('child')).sendKeys("Yeah right!");
        await delay(2000);
        await driver.findElement(By.name('subr')).click();
        await driver.findElement(By.className('button-style')).click();

    }

    async ValidateLessThanTwo() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await driver.findElement(By.name('parent')).sendKeys("this rain is perfect for an outing");
        await delay(2000);
        await driver.findElement(By.name('child')).sendKeys("a");
        await delay(2000);
        await driver.findElement(By.name('subr')).sendKeys("climate");
        await driver.findElement(By.className('button-style')).click();

    }

    async ValidateNoNumeric() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await driver.findElement(By.name('parent')).sendKeys("this rain is perfect for an outing");
        await delay(2000);
        await driver.findElement(By.name('child')).sendKeys("1");
        await delay(2000);
        await driver.findElement(By.name('subr')).sendKeys("climate");
        await driver.findElement(By.className('button-style')).click();

    }

    async ValidateStartWithNumeric() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await driver.findElement(By.name('parent')).sendKeys("this rain is perfect for an outing");
        await delay(2000);
        await driver.findElement(By.name('child')).sendKeys("1 ball");
        await delay(2000);
        await driver.findElement(By.name('subr')).sendKeys("climate");
        await driver.findElement(By.className('button-style')).click();

    }

    async ValidateStartWithSpace() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await driver.findElement(By.name('parent')).sendKeys("this rain is perfect for an outing");
        await delay(2000);
        await driver.findElement(By.name('child')).sendKeys(" no");
        await delay(2000);
        await driver.findElement(By.name('subr')).sendKeys("climate");
        await driver.findElement(By.className('button-style')).click();
    }

    async VerifySuccess() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await driver.findElement(By.name('parent')).sendKeys("Python is easy to learn");
        await delay(2000);
        await driver.findElement(By.name('child')).sendKeys("Yeah right!");
        await delay(2000);
        await driver.findElement(By.name('subr')).sendKeys("python");
        await driver.findElement(By.className('button-style')).click();

    }

    async VerifyRecheck() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await driver.findElement(By.name('parent')).sendKeys("Python is easy to learn");
        await delay(2000);
        await driver.findElement(By.name('child')).sendKeys("Yeah right!");
        await delay(2000);
        await driver.findElement(By.name('subr')).sendKeys("python");
        await driver.findElement(By.className('button-style')).click();
        await delay(2000);
        await driver.findElement(By.className('button-style')).click();

    }

    async VerifyExit() {
        driver.get('http://localhost:3000/')
        await delay(3000);
        await driver.findElement(By.id('check_project')).click();
        await driver.findElement(By.name('parent')).sendKeys("Python is easy to learn");
        await delay(2000);
        await driver.findElement(By.name('child')).sendKeys("Yeah right!");
        await delay(2000);
        await driver.findElement(By.name('subr')).sendKeys("python");
        await driver.findElement(By.className('button-style')).click();
        await delay(2000);
        await driver.findElement(By.className('exit-btn')).click();
    }
}

module.exports = new HomePage();