const { of, interval } = require('rxjs');
const { zip, take, scan } = require('rxjs/operators');

// ---------------------------------------
// zip = nth with nth
// ---------------------------------------
// AND STYLE OPERATOR
// This is generally how you get an observable that runs synchronously,
// and you just spread it over time by combining it in a zip style
// with an observable that happens over time and not synchronously.

const hello$ = of('h', 'e', 'l', 'l', 'o');
const interval$ = interval(400).pipe(take(5));
const result$ = hello$.pipe(
    zip(interval$, (x, y) => x),
    scan((accumulator, current) => accumulator + current, '')
);

module.exports = result$;
