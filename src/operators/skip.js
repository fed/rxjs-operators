const { interval } = require('rxjs');
const { take, filter } = require('rxjs/operators');

// Signature: skip(count: Number): Observable
// Description: Returns an Observable that skips the first `count` items
// emitted by the source Observable. This operator affects the beginning of the stream.

// ----0----1----2----3----(4|)
//          skip(3)
// -------------------3----(4|)

const source$ = interval(1000).pipe(take(7));
const result$ = source$.pipe(filter(isEven));

module.exports = result$;
