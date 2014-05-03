var Promise = require('promise');
var request = require('request');

function get (url) {

  return new Promise(function (resolve, reject) {

    request(url, function (err, response) {
      if (err) reject(err);
      else resolve(response.body);
    });
  });
}

function async (generator) {
  var iterator = generator();

  function move (result) {
    if (result.done) {
      result.value;
    }

    return result.value.then(
      function (promiseResult) {
        return move(iterator.next(promiseResult));
      },
      function (promiseError) {
        return move(iterator.throw(promiseError));
      });
  }

  return move(iterator.next());
}

async(function * () {

  try {
    var vg = yield get('http://www.vg.no');
    var google = yield get('http://www.google.no');

    console.log('vg', vg.substr(0, 30));
    console.log('google', google.substr(0, 30));
  }
  catch (error) {
    console.error('something blew up', error);
  }
});
