
import fruits from './foods';
import { choice, remove } from './helpers';


// draw a fruit 
let randomFruit = choice(fruits)
// log Id like a randomFruit please
console.log(`I'd like a ${randomFruit}, please`)
// log Here you go: RandomFruit
console.log(`Here you go: ${randomFruit}`)
// log Delicious! May I have another?
console.log(`Delicious! May I have another?`)
// remove the fruit from the fruits array 
remove(fruits, randomFruit)
// log I'm sorry we are all out. We have Fruits.length left
console.log(`I'm sorry we're all out. We have ${fruits.length} left`)
