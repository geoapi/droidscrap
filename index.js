var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app     = express();
var urls = [];

app.get('/scrape', function(req, res){
  // Let's scrape Android classes
  url = 'https://developer.android.com/reference/classes.html';

  request(url, function(error, response, html){
//   if (error) throw error; 
   if(!error){
      var $ = cheerio.load(html);
      $('a','table').map(function(i,elm){
  //       console.log($(this).text());
         urls.push($(this).text());
         });         
console.log(urls);
/**
      $('jd-descr').filter(function(){
        var data = $(this);
        classname = data.children().first().text().trim();
        link = data.children().last().children().last().text().trim();

        json.classname = classname;
        json.link = link;
        console.log(classname);
      })
**/
      
    }
/**
    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })
**/
    res.send('Check your console!')
  })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
