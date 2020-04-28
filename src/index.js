console.clear();

// const result$ = require('./operators/map');
// const result$ = require('./operators/mapTo');
// const result$ = require('./operators/filter');
const result$ = require('./operators/first');
// const result$ = require('./operators/startWith');
// const result$ = require('./operators/skipLast');
// const result$ = require('./operators/zip');

result$.subscribe(
    value => console.log(value),
    err => console.error(err),
    () => console.log('done')
);
