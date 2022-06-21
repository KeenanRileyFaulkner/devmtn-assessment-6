
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Choices div is not displayed before clicking "Draw"', async () => {
    const div = await driver.findElement(By.id('choices'));
    const displayed = await div.isDisplayed();
    expect(displayed).toBe(false);
})

test('Draw button displays choices div', async () => {
    await driver.findElement(By.id('draw')).click();
    const div = await driver.findElement(By.id('choices'));
    const displayed = await div.isDisplayed();
    expect(displayed).toBe(true);
})