var express = require('express')
var app = express();

app.get('*', function (req, res) {
    var httpsEnabledUrl = "https://" + req.headers.host + req.url;
    console.log("req.headers.host >> " + httpsEnabledUrl);
    res.redirect(httpsEnabledUrl);
});

app.listen(80, function () {
    console.log('Example app listening on port 3000!')
});
