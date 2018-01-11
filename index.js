const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1200});
    await page.goto('https://bbc.co.uk');
    await page.screenshot({path: 'example.png'});

    await page.$('img')
        .then((e) => {
            console.log(e);
            return e;
        });
    await browser.close();
})();