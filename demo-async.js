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
