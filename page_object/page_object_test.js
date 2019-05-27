let jsonHelp = require('../helper/jsonHelper/json.Helper');
jsonHelp.createJsonPath('data/json/CommonData.json');

let EC = protractor.ExpectedConditions;

let pageObject =  function () {

    this.launchWebsite = async function () {
       try{
           var urlPath = await jsonHelp.readJsonData('sURL');
           browser.waitForAngularEnabled(false);
           browser.get(urlPath);
           browser.driver.manage().window().maximize();

       } catch (e) {
           throw new Error("Can't launch website " + e);
       }
    };

    this.searchValue = async function (value) {
        try {
            var eIcon = await jsonHelp.readJsonData('iconSearch');
            var iSearch = element(by.xpath(eIcon));
            await browser.wait(EC.elementToBeClickable(iSearch),5000);
            if (iSearch.isDisplayed()){
                await iSearch.click();
                await this.inputSearch('inputSearch',value);
            }
        } catch (e) {
            throw new Error("Element should not have been displayed but it was!" + e);
        }
    };

    this.inputSearch = async function (eXpath, sInput) {
        try {
            var eInput = await jsonHelp.readJsonData(eXpath);
            var sSearch = element(by.xpath(eInput));
            browser.wait(EC.visibilityOf(sSearch), 5000);
            browser.sleep(1000);
            await sSearch.sendKeys(sInput);
            browser.sleep(5000);
        } catch (e) {
            throw new Error("Can't input text to search." + e);
        }
    };

    this.giveResult = async function () {
        try {
            var eText = await jsonHelp.readJsonData('textResult');
            var sResult = element.all(by.xpath(eText));
            var sTitle = [];
            if((EC.visibilityOf(sResult), 5000)){
                console.log("We found: ");
                for(let i = 1; i < 5; i++){
                    let value = await sResult.get(i).getAttribute("textContent");
                    sTitle.push(value);
                }
            }
            // browser.wait(EC.visibilityOf(sResult), 5000);
            console.log(sTitle);
        } catch (e) {
            throw new Error("Can't get the result." + e);
        }
    };

    this.clearSearch = async function () {
        var eButton = await jsonHelp.readJsonData('btnClear');
        var btnClear = element(by.xpath(eButton));
        await btnClear.click();
        browser.sleep(5000);
    };

    this.openPage = async function (pageName) {
        try {
            var sLink = await browser.getCurrentUrl().toString();
            var eMenu = await jsonHelp.readJsonData('menuMain');
            var menuMain = element(by.xpath(eMenu));
            var sMenu = "//*[contains(text(),\'" + pageName + "\')]";
            var menuItem = element(by.xpath(sMenu));
            await menuMain.click();
            browser.sleep(1000);
            await menuItem.click();
            browser.sleep(5000);
            if (this.urlChanged(sLink)){
                await this.takeScreenshot();
            }
        } catch (e) {
            throw new Error("Can't open the page " + pageName + "." + e);
        }
    };

    this.urlChanged = async function(preURL) {
        return function () {
            return browser.getCurrentUrl().then(function(curURL) {
                return preURL != curURL;
            });
        };
    };

    this.takeScreenshot = async function() {
        try {
            console.log("Take screenshot of the page");
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
                writeScreenShot(png, './reports/images/screenshot.png');
            });
        } catch (e) {
            throw new Error("Can't take screenshot of the page." + e);
        }
    }

};
module.exports = new pageObject();