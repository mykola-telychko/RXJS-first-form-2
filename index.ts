import { from } from 'rxjs';
import { first } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/first
// Example 2: First value to pass predicate

// EXPL-1-begin //emit first item to pass test
// const source = from([1, 2, 3, 4, 5]);
// const example = source.pipe(first((num) => num === 5));
// const subscribe = example.subscribe((val) =>
//   console.log(`First to pass test: ${val}`)
// );
// EXPL-1-end //output: "First to pass test: 5"

// EXPL-2-begin //emit first item to pass test
const listOfArr = from([
  [72, 3, 4, 5],
  [2, 31, 54, 50],
  [29, 44, 54, 5],
]);
const example = listOfArr.pipe(first((arr) => arr.includes(31)));
const subscribe = example.subscribe((val) =>
  console.log(`First to pass test: ${val}`)
);
// EXPL-2-end //output: "First finding arr on condition"
