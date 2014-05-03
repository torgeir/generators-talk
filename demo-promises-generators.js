function runner (generator) {
  var iter = generator(move);
  move();

  function move (value) {
    var result = iter.next(value);
    if (result.done) {
      console.log(result.value);
    }
  }
}

runner(function * (next) {
  yield setTimeout(next, 1000);
  console.log('waited 1');

  yield setTimeout(next, 2000);
  console.log('waited 2');

  return 42;
});


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
