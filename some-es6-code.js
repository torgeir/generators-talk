var person = { name: "bob", age: 25 };

var gen = function * () {
  yield 1;
  yield 2;
};

var iterator = gen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log('--');

function * fibonacci () {
  var n = 0, m = 1;

  while (true) {
    yield n;
    [n, m] = [m, n + m];
  }
};

function * take(n, list) {
  var i = 0;
  for (var x of list) {
    if (n === i++) {
      return;
    }
    yield x;
  }
}

for (var i of take(13, fibonacci())) {
  console.log(i);
}



