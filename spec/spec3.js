// spec.js
describe('Protractor Demo App', function() {
    let logo = element(by.xpath("/html/body/div[1]/a"))
    let menu = element.all(by.xpath("//*[@id='mySidenav']//a"));

    it('Launch website', function() {
        console.log("Launch website")
        browser.waitForAngularEnabled(false);
        browser.get('https://www.w3schools.com/', 50000);
        browser.driver.manage().window().maximize();
        browser.sleep(5000);
    });

    it('Click on each item',async function() {
        // let iTotal = await menu.count();
        // console.log("Total item: " + iTotal)
        for (let i = 0; i < 9; i++) {
            let sItem = await menu.get(i).getText();
            let sTemp = await sItem.replace('Learn ','');
            sTemp = await sTemp.toLowerCase();
            await menu.get(i).click();
            browser.sleep(3000);
            console.log("Verify page " + sItem)
            browser.get(browser.driver.getCurrentUrl().toString(), 50000);
            let sTitle = await browser.getTitle();
            sTitle = await sTitle.toLowerCase();
            expect(sTitle).toContain(sTemp);
            await logo.click();
            browser.sleep(3000);
        }
    });
});