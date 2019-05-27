let pageObj = require('../page_object/page_object_test');

describe('Protractor Demo App', function() {
    it('Launch website', async function() {
        await pageObj.launchWebsite();
    });

    // it('Input value to search', async function() {
    //     await pageObj.searchValue('read');
    // });
    //
    // it('Get search result', async function() {
    //     await pageObj.giveResult();
    // });
    //
    // it('Clear search value',async function() {
    //     await pageObj.clearSearch();
    // });

    it('Take screenshot of the page', async function() {
        await pageObj.openPage('Blog');
});
});