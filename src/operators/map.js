const { interval } = require('rxjs');
const { take, map } = require('rxjs/operators');

// Signature: map(project: Function, thisArg: any): Observable
// Description: Applies a given project function to each value emitted by the source stream.

// ----0----1----2----3----(4|)
//      map(x => 10 * x)
// ----0----10---20---30---(40|)

const source$ = interval(1000).pipe(take(5));
const result$ = source$.pipe(map(value => 10 * value));

module.exports = result$;
