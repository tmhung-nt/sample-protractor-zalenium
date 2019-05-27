exports.config = {
    seleniumAddress: 'http://hub:4444/wd/hub',
    specs: ['spec/*.js'],
    // specs: ['Tests/*.js'],
    framework: 'jasmine2',
    multiCapabilities: [
        {
            browserName: 'firefox',
            'name': 'Zalenium - Protractor - Firefox',
        },
        {
            browserName: 'chrome',
            'name': 'Zalenium - Protractor - Chrome',
        },
    ],
    allScriptsTimeout: 25000,
    defaultTimeoutInterval: 30000,
    onPrepare: function () {
        var HtmlReporter = require('protractor-beautiful-reporter');

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './reports'
         }).getJasmine2Reporter());
        
        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    }
};
