const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag:'a'})
console.log('Done with this task');
console.log('Starting the next one.')

//In this sync approach 
//First it prints start and then complete readFileSync and writeFileSync task.
// and then it console.log next two lines i.e.
// Done with this task
// Starting the next one.
// It just stucks there and wait for it to be completed and then goes to next line.
