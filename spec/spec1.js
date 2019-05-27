// spec.js
describe('Protractor Demo App', function() {
    let slogan = element(by.xpath("//h1[@class='slogan']"));
    let magni = element(by.id("js-search-container"));
    let sSearch = element(by.id("search-text"));
    let sSearchHeading = element(by.xpath("//div[@class='box-heading style5']/div"));
    let title = element.all(by.xpath("//div[@class='box-heading']//h2"));
    let clearSearch = element(by.xpath("//div[@class='bt-close js-search-close']"));
    // let icon = element(by.xpath("//div[@data-username='resn']/a [@href='/resn/']"));
    // let tooltip = element(by.xpath("//div[@data-username='resn']/div[@class='tooltip-user open']"));
    let logo = element(by.xpath("//div[@class='logo-header']"));
    let logoTooltip = element(by.xpath("//div[@class='logo-tooltip']"));
    let titleArr = [];

    it('Launch website', function() {
        console.log("Launch website")
        browser.waitForAngularEnabled(false);
        browser.get('https://www.awwwards.com/', 50000);
        browser.driver.manage().window().maximize();
        browser.sleep(5000);
        expect(browser.getTitle()).toEqual('Awwwards - Website Awards - Best Web Design Trends');
    });

    it('Check the slogan of website',async function() {
        console.log("Get slogan")
        let text = await slogan.getText();
        expect(text.toString()).toEqual('The awards of design, creativity and innovation on the internet');
    });

    it('Click to magnifier',async function() {
        console.log("Click to magnifier")
        await magni.click();
        browser.sleep(5000);
    });

    it('Input value to search',async function() {
        console.log("Input value to search")
        await sSearch.sendKeys("READ");
        browser.sleep(5000);
    });

    it('Get search result',async function() {
        console.log("Get search result")
        let text = await sSearchHeading.getText();
        expect(text.toString()).toMatch('We found');
    });

    it('Get title',async function() {
        console.log("Get title")
        for(let i = 1; i < 5; i++){
            let value = await title.get(i).getAttribute("textContent");
            titleArr.push(value);
        }
        console.log(titleArr)
    });

    it('Compare with existing data',async function() {
        console.log("Compare with existing data")
        let text = await sSearchHeading.getText();
        for(let i = 1; i < 5; i++){
            let value = await title.get(i).getAttribute("textContent");
            expect(text.toString().toLowerCase()).toMatch(value.toLowerCase());
        }
    });

    it('Clear search value',async function() {
        console.log("Clear search value")
        await clearSearch.click();
        browser.sleep(5000);
    });

    it('Hover mouse and click tooltip',async function() {
        console.log("Hover mouse and click tooltip")
        await browser.actions().mouseMove(logo).perform();
        browser.sleep(5000);
        logoTooltip.click();
        browser.sleep(5000);
    });

    it('Get page title from new page',async function() {
        console.log("Get page title from new page")
        browser.get(browser.driver.getCurrentUrl().toString(), 50000);
        expect(browser.getTitle()).toEqual('New Brand - Awwwards');
    });
});