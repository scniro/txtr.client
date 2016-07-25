var express = require('express');
var compression = require('compression');

var app = express();

app.use(compression());

app.use('/js/dist', express.static(__dirname + '/js/dist'));
app.use('/css/dist', express.static(__dirname + '/css/dist'));
app.use('/views', express.static(__dirname + '/views'));

app.all('/*', function (req, res, next) {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(process.env.PORT || 4000, function(){
    console.log('front end: express server running on port ' + (process.env.PORT || 4000));
});