var request = require("request");
var cheerio = require("cheerio");

request({
    uri: "https://www.google.com",
}, function (error, response, body) {
    var $ = cheerio.load(body);
    console.log($('meta'));
});