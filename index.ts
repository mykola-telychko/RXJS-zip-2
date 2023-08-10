import { take } from 'rxjs/operators';
import { interval, zip } from 'rxjs';

// Example 2: zip when 1 observable completes
//emit every 1s
const source = interval(1000);
//when one observable completes no more values will be emitted
const example = zip(source, source.pipe(take(2)));
//output: [0,0]...[1,1]
const subscribe = example.subscribe((val) => console.log(val));
