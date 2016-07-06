var Nightmare = require('nightmare');

var testCase = new Nightmare({show: true, openDevTools: true,})
    .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
    .goto('url')
    .wait(1000)
    .type('#username', 'username')
    .type('#password', 'password')
    .click('button.btn')
    .wait(3000)
    .screenshot('test.png')
    .run(function (err, nightmare) {
        if (err) {
            return console.log(err);
        }
        console.log('Done!');
    });

