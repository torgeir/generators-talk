var Promise = require('promise');
var request = require('request');

function get (url) {
  return new Promise(function (resolve, reject) {

    request(url, function (err, response) {
      if (err) reject(err);
      else resolve(response.body);
    })
  });
}

var vg = get('http://www.vg.no');
var google = get('http://www.google.com');

Promise
  .all([vg, google])
  .then(
    function (res) {
      console.log(res[0].substr(0, 20),
                  res[1].substr(0, 20));
    },
    function (error) {
      console.error("something blew up", error);
    });
