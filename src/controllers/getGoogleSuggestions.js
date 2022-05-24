import puppeteer from 'puppeteer';
import { filterResults } from '../utils/filterResults.js';

export async function getGoogleSuggestions(query) {
    // setup
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--lang=en-GB'],
    });
    const page = await browser.newPage();
    const website = 'https://www.google.com';

    // steps
    await page.goto(website);
    await page.click('input');
    await page.keyboard.type(query, {
        delay: 50,
    });
    const results = await page.evaluate(() => {
        const resultElements = document.querySelectorAll('li span');
        if (!resultElements) return [];
        return Array.from(resultElements).map((el) => el.textContent);
    });
    
    // cleanup
    browser.close();

    // filter results
    return filterResults(query, results);
}
