var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
    var articleone :{
        title: 'Article-one I Anil',
        heading: 'Article-one',
        date: 'aug 4,2017',
        content: `True friendship is like sound health;
        the value of it is seldom known until it be lost.`
,
    var articletw0 :
         title: 'Article-twoI Anil',
        heading: 'Article-two',
        date: 'aug 4,2017',
        content: `True friendship is like sound health;
        the value of it is seldom known until it be lost.`

};
function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        <title>
         <link href="/ui/style.css" rel="stylesheet" />
     </head>
       <body>
        <div>
            <a href='/'>
                HOME
            </a>
        </div>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            <p>
               ${content}
            </p>
        </div>
    </body>
</html>
 `;
 return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleone));
});
  app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
