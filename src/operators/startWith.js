// startWith = prefix using concat
// startWith prepends an observable that emits one value and then completes

const { of, interval } = require('rxjs');
const { concat, startWith } = require('rxjs/operators');

const source$ = interval(1000);
const result$ = source$.pipe(startWith('b'));

// This is equivalent to:
// const prefix$ = of('a');
// const result$ = prefix$.pipe(
//     concat(source$)
// );

module.exports = result$;
