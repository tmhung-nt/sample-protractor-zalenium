// spec.js

describe('Protractor Demo App', function() {
    let navMain = element(by.xpath("//*[@id='nav-main']"))
    let menuMain = element(by.xpath("//*[contains(text(),'MENU')]"));
    let menuAboutUs = element(by.xpath("//*[contains(text(),'About Us')]"));
    let menuBlog = element(by.xpath("//*[contains(text(),'Blog')]"));
    let menuCategory = element(by.xpath("//li[@data-name='filter.navigation_section.categories']"));
    let menuWebDesign = element(by.xpath("//*[@id='box-filters-fixed']/div[2]/div[2]/div/div[2]/ul/li[9]/strong/a"));
    let paging = element.all(by.xpath("//div[@class='paginate']//a"));


    let tooltip = element(by.xpath("//div[@data-username='resn']/div[@class='tooltip-user open']"))
    let logo = element(by.xpath("//div[@class='logo-header']"))
    let logoTooltip = element(by.xpath("//div[@class='logo-tooltip']"))
    let titleArr = [];

    it('Launch website', function() {
        console.log("Launch website")
        browser.waitForAngularEnabled(false);
        browser.get('https://www.awwwards.com/', 50000);
        browser.driver.manage().window().maximize();
        browser.sleep(5000);
    });

    it('Click Main menu',async function() {
        console.log("Click Main menu")
        await menuMain.click();
        browser.sleep(5000);
    });
/*
    it('Hove and click', function () {
        browser.ignoreSynchronization = true;
        browser.executeScript("if(document.createEvent){" +
            "var hoverEventObj = document.createEvent('MouseEvents');" +
            "hoverEventObj.initEvent('mouseover',true,false);" +
            "arguments[0].dispatchEvent(hoverEventObj);" +
            "}" +
            "else if(document.createEventObject){" +
            "arguments[0].fireEvent('onmouseover');" +
            "browser.sleep(3000);" +
            "}arguments[1].click();", navMain, menuAboutUs);
    });
*/
    it('Click "About Us" menu',async function() {
        browser.executeScript('arguments[0].scrollIntoView(true)', menuAboutUs);
        browser.sleep(3000);
        console.log("Click 'About Us' menu")
        await menuAboutUs.click();
        browser.sleep(5000);
    });

    it('Take screenshot of the page',async function() {
        console.log("Take screenshot of the page")
        // at the top of the test spec:
        var fs = require('fs');
        // abstract writing screen shot to a file
        function writeScreenShot(data, filename) {
            var stream = fs.createWriteStream(filename);
            stream.write(new Buffer(data, 'base64'));
            stream.end();
        }
        // within a test:
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, '../Demo/images/screenshot.png');
        });
        // browser.takeScreenshot();
    });

    it('Click Main menu',async function() {
        console.log("Click Main menu")
        await menuMain.click();
        browser.sleep(5000);
    });

    it('Select Blog > Category > Web Design',async function() {
        console.log("Click 'Blog' menu")
        await menuBlog.click();
        browser.sleep(5000);
        console.log("Click 'Categories' dropdown")
        await menuCategory.click();
        browser.sleep(5000);
        console.log("Click 'Web Design' category")
        browser.actions().mouseMove(menuWebDesign).click().perform();
        browser.sleep(5000);
    });

    it('Scroll to the end of the page and select page 2',async function() {
        console.log("Scroll to the end of the page")
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');
        browser.sleep(5000);
        let iPage = await paging.count();
        if (iPage > 0){
            console.log("Select page 2")
            let nPage = element(by.xpath("//*[@id='content']/div/div/div/div/div/div[1]/a[1]"));
            await nPage.click();
            browser.sleep(5000);
            console.log("Page 2")
        }
    });

    it('Verify page 2',async function() {
        console.log("Verify page 2")
        expect(browser.getCurrentUrl()).toEqual("https://www.awwwards.com/blog/web-design-tag/?page=2");
        browser.sleep(5000);
    });

});