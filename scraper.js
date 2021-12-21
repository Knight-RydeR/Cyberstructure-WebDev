const puppet = require('puppeteer')

async function scrape(searchName) {
    console.log("here in scrape")

    const browser = await puppet.launch({
        headless: true,
        args: ["--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true
    });
    const page = await browser.newPage();
    let search = searchName ?? "";
    await page.goto(`https://pakistanistores.com/products/${search}`)
    var text = await page.evaluate(async ()=> {

        
        let names = await document.querySelector("body > div:nth-child(3) > div > div:nth-child(3) > ul > li:nth-child(1) > a");
        // if(names.length<=0) return {}
        return {name : names.title,
        link : names.href,
    price : names.querySelector("body > div:nth-child(3) > div > div:nth-child(3) > ul > li:nth-child(1) > a > div > div.bottom-section > div > div.primary-color.price").innerText}
    })
   
    let {price} = text;
     price = parseInt(price.replace("Rs.","").replace(",",""))
     text.price = price;
    console.log(text);
    browser.close();
    return text;

}

module.exports = scrape;