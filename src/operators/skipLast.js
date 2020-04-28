const { interval } = require('rxjs');
const { take, skipLast } = require('rxjs/operators');

const source$ = interval(1000).pipe(take(5));

// ----0----1----2----3----(4|)
//          skipLast(2)
// ----0----1----(2|)

const result$ = source$.pipe(skipLast(2));

module.exports = result$;
