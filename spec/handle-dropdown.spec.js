describe("sample test to handle dropdown", () => {
    it("handling dropdown test case", () => {
        const appUrl = 'http://juliemr.github.io/protractor-demo/';
        browser.get(appUrl);
        browser.driver.manage().window().maximize();

        element(by.model('first')).clear().sendKeys('5');
        element.all(by.options('value for (key, value) in operators'))
            .get(3).click();
        element(by.model('second')).clear().sendKeys('3');
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('15');
    }); 
});