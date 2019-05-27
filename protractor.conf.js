// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/spec2.js'],
    allScriptsTimeout: 50000,
    jasmineNodeOpts: {defaultTimeoutInterval: 10000000}
}