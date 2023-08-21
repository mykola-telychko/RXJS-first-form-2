import { from } from 'rxjs';
import { first } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/first
// Example 2: First value to pass predicate

const source = from([1, 2, 3, 4, 5]);
//emit first item to pass test
const example = source.pipe(first((num) => num === 5));
//output: "First to pass test: 5"
const subscribe = example.subscribe((val) =>
  console.log(`First to pass test: ${val}`)
);
