const { interval } = require('rxjs');
const { take, first } = require('rxjs/operators');

// Signature: first(predicate?: Function | null, defaultValue?): Observable
// Description: Emits only the first value (or the first value that meets some condition)
// emitted by the source Observable and terminates.
// The predicate function and default value are optional.
// The default value is emitted in case no valid value was found on the source.

// ----0----1----2----3----(4|)
//          first()
// ---(0|)

const source$ = interval(1000).pipe(take(7));
const result$ = source$.pipe(first());

// ----0----1----2----3----(4|)
//          first(isOdd)
// --------(1|)

const isOdd = x => x % 2 !== 0;
const source$ = interval(1000).pipe(take(7));
const result$ = source$.pipe(first(isOdd));

// Third case: no emitted value meets the predicate condition,
// it then returns the default value when the source stream terminates.
// The resulting observable also completes immediately.

// ----0----1----2----3----(4|)
//      first(x => x > 10)
// --------------------------('rawr'|)

const source$ = interval(1000).pipe(take(7));
const result$ = source$.pipe(first(x => x > 10, 'rawr'));

module.exports = result$;
