const puppet = require('puppeteer')

String.prototype.replaceAll = function (stringToFind, stringToReplace) {
    if (stringToFind === stringToReplace) return this;
    var temp = this;
    var index = temp.indexOf(stringToFind);
    while (index != -1) {
        temp = temp.replace(stringToFind, stringToReplace);
        index = temp.indexOf(stringToFind);
    }
    return temp;
};
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
    console.log(price.replace("Rs.",""))
     price = price.replace("Rs.","").replaceAll(',','')
     text.price = price;
    console.log(price);
    browser.close();
    return text;

}


module.exports = scrape;