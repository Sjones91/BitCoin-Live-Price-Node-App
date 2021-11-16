
const https = require("https");
function printPrice(price) {
    const message = (`The current price of Bitcoin is ${price} usd`);
    console.log(message)
}
https.get("https://api.coindesk.com/v1/bpi/currentprice.json", (res) => {
    let body = "" ;
    res.on("data", chunk => {
        body += chunk;
    })
    res.on("end", response => {
        const price = JSON.parse(body);
        printPrice(price.bpi.USD.rate)
    })
    
    
}) 
