var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  // The URL we are scraping from - in this case Anchorman 2.

  url = 'http://www.imdb.com/title/tt1229340/';

  // The structure of our request call
  // The first parameter is our URL
  // The callback function takes 3 paramaters, an error, response status code and the html

  request(url, function(error, response, html){

  	// Check to make sure no errors occurred when making the request

  	if(!error){
  		// Utilize the cheerio library on the returned html which will essentially give us jQuery functionality

  		var $ = cheerio.load(html);

  		// Variables we're going to capture

  		var title, release, rating;
  		var json = { title: "", release : "", rating : ""};
  	}
  })
})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;