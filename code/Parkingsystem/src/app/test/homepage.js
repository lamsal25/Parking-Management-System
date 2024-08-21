const { Builder, By } = require('selenium-webdriver');
require('chromedriver');

async function testHomepage() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Assuming your Next.js app is running locally on port 3000
        await driver.get('http://localhost:3000');

        // Verify that the Hero component is loaded
        let heroComponent = await driver.findElement(By.id('hero-component')).isDisplayed();
        console.log(`Hero Component Displayed: ${heroComponent ? "Passed" : "Failed"}`);

        // Verify that the Feature component is loaded
        let featureComponent = await driver.findElement(By.id('feature-component')).isDisplayed();
        console.log(`Feature Component Displayed: ${featureComponent ? "Passed" : "Failed"}`);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit("Test successful");
    }
}

testHomepage().catch(console.error);