const { interval } = require('rxjs');
const { take, filter } = require('rxjs/operators');

// Signature: filter(predicate: Function, thisArg: any): Observable
// Description: Emit only those values that meet the condition.

// ----0----1----2----3----(4|)
//       filter(isEven)
// ----0---------2---------(4|)

const isEven = x => x % 2 === 0;
const source$ = interval(1000).pipe(take(5));
const result$ = source$.pipe(filter(isEven));

module.exports = result$;
