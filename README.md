# rxjs-operators

![Reactive Extensions logo](http://reactivex.io/assets/Rx_Logo_S.png)

Course: https://github.com/staltz/frontmania-rxjs-workshop

Left off here: https://egghead.io/lessons/rxjs-flatten-a-higher-order-observable-with-concatall-in-rxjs

In marble diagrams, values in parenthesis means it happens synchronnously.

## Logging

* [`tap`](./src/operators/tap.js)

## Transformational

* [`map`](./src/operators/map.js)
* [`mapTo`](./src/operators/mapTo.js)

## Filtering

* [`filter`](./src/operators/filter.js)

From the beginning of the event stream:

* [`take`](./src/operators/take.js)
* [`first`](./src/operators/first.js)
* [`skip`](./src/operators/skip.js)
* [`takeUntil`](./src/operators/takeUntil.js)

From the end of the event stream:

* [`takeLast`](./src/operators/takeLast.js)
* [`last`](./src/operators/last.js)
* [`skipLast`](./src/operators/skipLast.js)

## Combination

Serial:

* [`concat`](./src/operators/concat.js)
* [`startWith`](./src/operators/startWith.js)

Parallel:

* [`merge`](./src/operators/merge.js)
