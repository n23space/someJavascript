var Y => (f => (x => f(x(x))))(f => (x => f(x(x))));

var factorial_gen = f => (n => ((n === 0) ? 1 : n * f(n - 1)));

console.log(Y(factorial_gen)(12));

