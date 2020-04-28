const { interval } = require('rxjs');
const { take, mapTo } = require('rxjs/operators');

// Signature: mapTo(value: any): Observable
// Description: Maps each value emitted by the source stream to a constant value.

// --------0--------1--------2--------3--------(4|)
//                  mapTo('rawr')
// --------'rawr'---'rawr'---'rawr'---'rawr'---('rawr'|)

const source$ = interval(1000).pipe(take(5));
const result$ = source$.pipe(mapTo('rawr'));

module.exports = result$;
