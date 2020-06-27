var express = require('express');
var fs = require('fs')
app = express();

var response;

// read CONFIG
var msg = process.env.CONFIG;


app.get('/', function (req, res) {

    response = 'Configuration's content is: => ' + msg + '\n';

    // Read in the secret file
    fs.readFile('/opt/app-root/secure/secdata.sec', 'utf8', function (secerr,secdata) {
        if (secerr) {
            console.log(secerr + '\n');
            response += secerr + '\n';
        }
        else {
            response += 'Secret data revealed: => ' + secdata + '\n';
        }

        //send the response to the client
        res.send(response);
    });

});

app.listen(8080, function () {
  console.log('Listening on port 8080...');
});
